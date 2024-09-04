"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_providers/trpc-provider";
import { User } from "@prisma/client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TCreateUserSchema, createUserSchema } from "@/lib/dtos";

interface UserFormProps {
  user: User;
  action: "Add" | "Edit";
}

const UserForm = ({ user, action }: UserFormProps) => {
  const { toast } = useToast();
  const utils = trpc.useUtils();
  const [open, setOpen] = useState(false);

  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      ...user,
      email: user.email ?? "",
      phone_number: user.phone_number ?? ""
    },
  });

  const addUser = trpc.createUser.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully created User",
      });

      utils.getAllUsers.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error creating user",
      });
    },
  });

  const updateUsers = trpc.updateUser.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully updated User",
      });

      utils.getAllUsers.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error updating user",
      });
    },
  });

  const onSubmit = (values: TCreateUserSchema) => {
    if (user.id) {
      updateUsers.mutate({
        ...values,
        id: user.id,
      });
    } else {
      addUser.mutate({ ...values });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          data-cy={`${action}-user`}
          className={`${
            action === "Edit" ? "w-full" : ""
          }`}
        >
          {action} User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{action} User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <fieldset disabled={form.formState.isSubmitting}>
              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter name"
                          {...field}
                          data-cy="user-name"
                          className="border-gray-300 rounded-md"
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
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter lecture title"
                          {...field}
                          data-cy="user-email"
                          className="border-gray-300 rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Phone number"
                          {...field}
                          data-cy="user-phone-no"
                          className="border-gray-300 rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter password"
                          {...field}
                          data-cy="user-paassword"
                          className="border-gray-300 rounded-md"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
              <div className="flex justify-end my-5">
                <Button
                  disabled={form.formState.isSubmitting}
                  className="bg-blue-600 text-white py-2 px-7 rounded-md font-medium text-xs border border-white outline-2 outline-blue-600 active:outline"
                  type="submit"
                  data-cy="user-submit"
                >
                  {action === "Add" ? "Proceed" : "Edit"}
                </Button>
              </div>
            </fieldset>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UserForm;
