"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_providers/trpc-provider";
import { Location } from "@prisma/client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLocationSchema, TCreateLocationSchema } from "@/lib/dtos";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface LocationFormProps {
  location: Location;
  action: "Add" | "Edit";
}

const LocationForm = ({ location, action }: LocationFormProps) => {
  const { toast } = useToast();
  const utils = trpc.useUtils();
  const [open, setOpen] = useState(false);

  const form = useForm<TCreateLocationSchema>({
    resolver: zodResolver(createLocationSchema),
    defaultValues: {
      name: location.name ?? "",
      address: location.address ?? "",
      city: location.city ?? "",
      state: location.state ?? "",
      country: location.country ?? "",
      postal_code: location.postal_code ?? "",
      default: location.default ?? true,
    },
    mode: "onChange",
  });

  const addLocation = trpc.createLocation.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully created Location",
      });

      utils.getAllLocations.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error creating location",
      });
    },
  });

  const updateLocation = trpc.updateLocation.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully updated Location",
      });

      utils.getAllLocations.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error updating location",
      });
    },
  });

  const onSubmit = (values: TCreateLocationSchema) => {
    if (location.id) {
      updateLocation.mutate({ ...values, id: location.id });
    } else {
      addLocation.mutate(values);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            data-cy={`${action}-location`}
            className={`${action === "Edit" ? "w-full" : ""}`}
          >
            {action} Location
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{action} Location</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset disabled={addLocation.isLoading || updateLocation.isLoading}>
                <div className="grid gap-6 text-white">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter name"
                            data-cy="location-name"
                            className="cursor-pointer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter address"
                            data-cy="location-address"
                            className="cursor-pointer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter city"
                            data-cy="location-city"
                            className="cursor-pointer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter state"
                            data-cy="location-state"
                            className="cursor-pointer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter country"
                            data-cy="location-country"
                            className="cursor-pointer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postal_code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter postal code"
                            data-cy="location-postal_code"
                            className="cursor-pointer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="default"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default</FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="cursor-pointer"
                            id="location-default"
                            data-cy="location-default"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end my-5">
                  <Button
                    disabled={addLocation.isLoading || updateLocation.isLoading}
                    className="bg-blue-600 text-white py-2 px-7 rounded-md font-medium text-xs border border-white outline-2 outline-blue-600 active:outline"
                    type="submit"
                    data-cy="location-submit"
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

export default LocationForm;
