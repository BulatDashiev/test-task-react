// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const propertiesPath = path.join(process.cwd(), "data/properties.json");
  let data = await fs.readFile(propertiesPath);
  data = JSON.parse(data);

  if (req.query.sort) {
    switch (req.query.sort) {
      case "date":
        data = data.sort(() => (Math.random() > 0.5 ? 1 : -1));
        break;
      case "price_asc":
        data = data.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
      case "price_desc":
        data = data.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
    }
  }

  if (req.query.type) {
    data = data.filter((item) => item.type === req.query.type);
  }

  if (req.query.search) {
    data = data.filter((item) =>
      Object.keys(item).some((key) =>
        ("" + item[key]).toLowerCase().includes(req.query.search.toLowerCase())
      )
    );
  }

  res.status(200).json(data);
}
