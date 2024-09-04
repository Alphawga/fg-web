"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_providers/trpc-provider";
import { DialogClose } from "@radix-ui/react-dialog";

function DeleteLocationModal ({ id }: { id: string }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const utils = trpc.useUtils();

  const deleteLocation = trpc.deleteLocation.useMutation({
    onSuccess: () => {
      toast({ description: "Location deleted successfully." });

      utils.getAllLocations.invalidate().then(() => {
        setOpen(false);
      });
    },
    onError: () => {
      toast({ description: "Failed to delete", variant: "destructive" });
    },
  });

  const onDelete = () => {
    deleteLocation.mutate({ id: id });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full border outline outline-2"
          variant="outline"
          size="sm"
          data-cy="delete-user"
        >
          Delete Location
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Location</DialogTitle>
          <DialogDescription>
            Confirm you want to delete this location
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              data-cy="cancel-button"
              className="active:outline outline-2"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            key="submit-button"
            className="outline outline-2"
            variant="outline"
            data-cy="confirm-delete-button"
            onClick={onDelete}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteLocationModal;
