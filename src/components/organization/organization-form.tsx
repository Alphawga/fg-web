"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_providers/trpc-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import {  createOrganizationSchema, TCreateorganizationSchema } from "@/lib/dtos";
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
import { useState } from "react";
import { Organization } from "@prisma/client";

interface organizationFormProps {
  organization: Organization;
  action: "Add" | "Edit";
}

const OrganizationForm = ({ organization, action }: organizationFormProps) => {
  const { toast } = useToast();
  const utils = trpc.useUtils();
  const [open, setOpen] = useState(false);

  const form = useForm<TCreateorganizationSchema>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: organization.name ?? "",
      about_us: organization.about_us ?? "",

    },
    mode: "onChange",
  });

  const addorganization = trpc.createOrganization.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully created organization",
      });

      utils.getAllOrganizations.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error creating organization",
      });
    },
  });

  const updateorganization = trpc.updateOrganization.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully updated organization",
      });

      utils.getAllOrganizations.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error updating organization",
      });
    },
  });



  const onSubmit = (values: TCreateorganizationSchema) => {
    if (organization.id) {
      updateorganization.mutate({ ...values, id: organization.id });
    } else {
      addorganization.mutate(values);
    }
  };


  return (

    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            data-cy={`${action}-organization`}
            className={`${action === "Edit" ? "w-full" : ""}`}
          >
            {action} organization
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{action} organization</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset disabled={addorganization.isLoading || updateorganization.isLoading}>
                <div className="grid gap-6 text-black ">
               
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter name"
                            data-cy="organization-title"
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
                    name="about_us"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About Us</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter about us"
                            data-cy="organization-description"
                            className="cursor-pointer "
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
                    disabled={addorganization.isLoading || updateorganization.isLoading}
                    className="bg-blue-600 text-black py-2 px-7 rounded-md font-medium text-xs border border-black outline-2 outline-blue-600 active:outline"
                    type="submit"
                    data-cy="organization-submit"
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

export default OrganizationForm;
