import path from "path";
import fs from "fs/promises";
import { Data } from "./definitions";

export async function getJSONData(): Promise<Data> {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
}