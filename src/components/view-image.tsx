import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";

interface ViewImageProps {
  imageUrl: string;
}

const ViewImage: React.FC<ViewImageProps> = ({ imageUrl }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" underline">View Image</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Event Image</DialogTitle>
          <DialogDescription>
              Below is the image for the selected event.
          </DialogDescription>
        </DialogHeader>
        {imageUrl ? <Image src={imageUrl} alt="Event" className="w-full h-auto" width={200} height={200}/> : "No Image to view"}

      </DialogContent>
    </Dialog>
  );
};

export default ViewImage;
