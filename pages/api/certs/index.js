import { client } from "../../../utils/client";
import { allCertsQuery } from "../../../utils/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = allCertsQuery();
    const data = await client.fetch(query);
    console.log("sent certs");
    res.status(200).json(data);
  }
}
