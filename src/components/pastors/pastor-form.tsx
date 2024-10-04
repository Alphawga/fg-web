"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_providers/trpc-provider";
import {  Pastor } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import {  createPastorSchema, TCreatePastorSchema } from "@/lib/dtos";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

interface PastorFormProps {
  pastor: Pastor;
  action: "Add" | "Edit";
}

const PastorForm = ({ pastor, action }: PastorFormProps) => {
  const { toast } = useToast();
  const utils = trpc.useUtils();
  const [open, setOpen] = useState(false);

  const form = useForm<TCreatePastorSchema>({
    resolver: zodResolver(createPastorSchema),
    defaultValues: {
      name: pastor.name ?? "",
      email: pastor.email ?? "",
      phone: pastor.phone ?? "",
      head_pastor: pastor.head_pastor ?? false,
      bio: pastor.bio ?? "",
      image: pastor.image ?? undefined,

    },
    mode: "onChange",
  });

  const addPastor = trpc.createPastor.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully created Pastor",
      });

      utils.getAllPastors.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error creating pastor",
      });
    },
  });

  const updatePastor = trpc.updatePastor.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully updated Pastor",
      });

      utils.getAllPastors.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error updating pastor",
      });
    },
  });

  const { data: locations, isLoading: locationsLoading } = trpc.getAllLocations.useQuery();

  const onSubmit = (values: TCreatePastorSchema) => {
    if (pastor.id) {
      updatePastor.mutate({ ...values, id: pastor.id });
    } else {
      addPastor.mutate(values);
    }
  };
  const locationData = trpc.getAllLocations.useQuery();

  const uploadImageMutation = trpc.uploadImage.useMutation({
    onSuccess: (res) => {
      console.log("Upload successful:", res.url);
    },
    onError: (error) => {
      console.error("Error uploading to Cloudinary:", error);
    },
  });
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      try {
        const base64File = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file); 
        });
  
        const response = await uploadImageMutation.mutateAsync({ file: base64File });
        if (response.url) {
          console.log("Image uploaded", response.url)
          form.setValue("image", response.url); 
        }
      } catch (error) {
        console.error("Error in file upload:", error);
      }
    }
  };
  return (

    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            data-cy={`${action}-pastor`}
            className={`${action === "Edit" ? "w-full" : ""}`}
          >
            {action} Pastor
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{action} Pastor</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset disabled={addPastor.isLoading || updatePastor.isLoading}>
                <div className="grid gap-6 text-black ">
                <FormField
      control={form.control}
      name="image"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Image</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              data-cy="pastor-image"
              onChange={handleFileChange} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter name"
                            data-cy="pastor-title"
                            className=" cursor-pointer "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter email"
                            data-cy="pastor-title"
                            className=" cursor-pointer "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter phone"
                            data-cy="pastor-phone"
                            className=" cursor-pointer "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter phone"
                            data-cy="pastor-phone"
                            className=" cursor-pointer "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              
   
                </div>
                <div className="flex justify-end my-5">
                  <Button
                    disabled={addPastor.isLoading || updatePastor.isLoading}
                    className="bg-blue-600 text-black py-2 px-7 rounded-md font-medium text-xs border border-black outline-2 outline-blue-600 active:outline"
                    type="submit"
                    data-cy="pastor-submit"
                  >
                    {action === "Add" ? "Proceed" : "Edit"}
                  </Button>
                </div>
              </fieldset>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PastorForm;
