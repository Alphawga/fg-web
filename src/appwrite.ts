import { Client, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1") // Set the endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "default-project-id"); // Set the project ID

const storage = new Storage(client);
const database = new Databases(client);

export { client, storage, database };
