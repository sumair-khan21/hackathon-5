import { createClient } from '@sanity/client';
export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID, 
    dataset: "production",
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2025-01-14',
  });