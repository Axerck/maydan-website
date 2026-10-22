import type { APIContext } from "astro";
import { buildFeed } from "../lib/feed";

// Indirizzo breve del feed italiano (maydan.it/rss.xml)
export const GET = (context: APIContext) => buildFeed("it", context);
