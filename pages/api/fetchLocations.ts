import { Client, Databases } from 'appwrite';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1') // Set the endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || 'default-project-id'); // Set the project ID

const database = new Databases(client);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Set the API key on the server-side
    client.headers['X-Appwrite-Key'] = process.env.APPWRITE_API_KEY || '';

    const databaseId = '66e51b48003696c4d75f';
    const collectionId = '66e51b67000daa15002d';

    const response = await database.listDocuments(databaseId, collectionId);

    res.status(200).json(response.documents);
  } catch (error: any) {
    console.error('Error fetching documents:', error.message || error);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
}
