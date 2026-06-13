import axios from "axios";
import * as cheerio from "cheerio";

export async function parseUrl(url: string): Promise<string> {
  const response = await axios.get<string>(url);
  const $ = cheerio.load(response.data);
  const text = $("body").text().replace(/\s+/g, " ").trim();
  return text;
}
