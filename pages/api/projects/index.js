import { client } from "../../../utils/client";
import { allProjectsQuery } from "../../../utils/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = allProjectsQuery();

    const data = await client.fetch(query);
    console.log("sent projects");
    res.status(200).json(data);
  }
}
