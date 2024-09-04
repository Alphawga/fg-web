"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_providers/trpc-provider";
import { News } from "@prisma/client";
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
import { createNewsSchema, TcreateNewsSchema } from "@/lib/dtos";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface NewsFormProps {
  news: News;
  action: "Add" | "Edit";
}

const NewsForm = ({ news, action }: NewsFormProps) => {
  const { toast } = useToast();
  const utils = trpc.useUtils();
  const [open, setOpen] = useState(false);

  const form = useForm<TcreateNewsSchema>({
    resolver: zodResolver(createNewsSchema),
    defaultValues: {
      title: news.title ?? "",
      content: news.content ?? "",
      location_id: news.location_id ?? "",
    },
    mode: "onChange",
  });

  const addNews = trpc.createNews.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully created News",
      });

      utils.getAllNews.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error creating news",
      });
    },
  });

  const updateNews = trpc.updateNews.useMutation({
    onSuccess: async () => {
      toast({
        title: "Success",
        variant: "default",
        description: "Successfully updated News",
      });

      utils.getAllNews.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: async (error) => {
      console.error(error);

      toast({
        title: "Error",
        variant: "destructive",
        description: "Error updating news",
      });
    },
  });

  const onSubmit = (values: TcreateNewsSchema) => {
    if (news.id) {
      updateNews.mutate({ ...values, id: news.id });
    } else {
      addNews.mutate(values);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            data-cy={`${action}-news`}
            className={`${action === "Edit" ? "w-full" : ""}`}
          >
            {action} News
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{action} News</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset disabled={addNews.isLoading || updateNews.isLoading}>
                <div className="grid gap-6 text-white">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter title"
                            data-cy="news-title"
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
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter content"
                            data-cy="news-content"
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
                    name="location_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter location ID"
                            data-cy="news-location_id"
                            className="cursor-pointer"
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
                    disabled={addNews.isLoading || updateNews.isLoading}
                    className="bg-blue-600 text-white py-2 px-7 rounded-md font-medium text-xs border border-white outline-2 outline-blue-600 active:outline"
                    type="submit"
                    data-cy="news-submit"
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

export default NewsForm;
