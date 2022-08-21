import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "11ok4el6",
  dataset: "production",
  apiVersion: "2022-08-17",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
