/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import { publicProcedure } from "@/server/trpc";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with your environment variables
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageSchema = z.object({ file: z.string().min(1, "File is required") });

// Create the upload image procedure
export const uploadImage = publicProcedure
  .input(uploadImageSchema)
  .mutation(async (opts) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const result = await cloudinary.uploader.upload(opts.input.file, { upload_preset: "ml_default" });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return { url: result.secure_url }; // Return the secure URL of the uploaded image
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw new Error("Internal server error");
    }
  });
