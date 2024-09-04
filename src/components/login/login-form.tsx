"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/lib/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm () {
  type LoginFormInput = z.infer<typeof loginFormSchema>;

  const router = useRouter();

  const form = useForm<LoginFormInput>({
    resolver: zodResolver(loginFormSchema), defaultValues: {
      username: "",
      password: "",
    }
  });
  const { toast } = useToast();

  async function onSubmit (values: LoginFormInput) {
    try {
      signIn(
        "credentials", {
          username: values.username,
          password: values.password,
          redirect: false,
        }
      ).then (async (res) => {
        if (!res || res.error) {
          toast({
            variant: "destructive",
            title: "Login failed!", // TODO: Translate text
            description: "Some unexpected error occurred.",
          });

          return;
        }

        router.push("/admin");
        toast({ description: "Logged in successfully" }); // TODO: Translate text
      });
    } catch (_error) {
      console.error("error caught");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="space-y-5">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input data-cy="username-or-email-field" placeholder="Email or Username"  {...field} />
                </FormControl>
                <FormMessage className="text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input data-cy="password-field" placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-normal" />
              </FormItem>
            )}
          />
          <Button data-cy="submit-button" type="submit">Login</Button>
        </fieldset>
      </form>
    </Form>
  );
}
