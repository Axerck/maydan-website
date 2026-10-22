import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import callIt from "../data/call-e-linee-guida-it.json";
import callEn from "../data/call-e-linee-guida-en.json";

// Feed RSS del sito: volumi, attività e call in corso, una lingua per feed.
// Lo legge anche e-newsletter («Aggiungi novità dal sito»): titolo, link, riassunto, data,
// categoria e immagine (enclosure con URL https assoluto).

type Lang = "it" | "en";

interface Fm {
	title?: string;
	description?: string;
	date?: string;
	year?: string;
	cover?: string;
}
type Md = { frontmatter: Fm; url?: string };

const volumi = {
	it: import.meta.glob<Md>("../pages/it/pubblicazioni/*.md", { eager: true }),
	en: import.meta.glob<Md>("../pages/en/pubblicazioni/*.md", { eager: true }),
};
const attivita = {
	it: import.meta.glob<Md>("../pages/it/attivita/*.md", { eager: true }),
	en: import.meta.glob<Md>("../pages/en/attivita/*.md", { eager: true }),
};
const calls = { it: callIt, en: callEn } as Record<Lang, { active_call: { title: string; image?: string; pdf_link: string; date?: string; deadlines?: string[]; more_link?: string } }>;

const TESTI = {
	it: {
		title: "Maydan – Rivista sui mondi arabi, semitici e islamici",
		description: "Nuovi volumi, attività e call for papers della rivista Maydan.",
		volume: "Volumi",
		attivita: "Attività",
		call: "Call for Papers",
	},
	en: {
		title: "Maydan – Journal on Arab, Semitic and Islamic worlds",
		description: "New issues, activities and calls for papers from Maydan.",
		volume: "Issues",
		attivita: "Activities",
		call: "Call for Papers",
	},
};

const MIME: Record<string, string> = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif", avif: "image/avif" };

function toDate(v?: string): Date | undefined {
	if (!v) return undefined;
	const d = new Date(v);
	return Number.isNaN(d.getTime()) ? undefined : d;
}

function enclosure(src: string | undefined, site: URL) {
	if (!src) return undefined;
	const type = MIME[src.split(/[?#]/)[0].split(".").pop()?.toLowerCase() ?? ""];
	return type ? { url: new URL(src, site).href, length: 0, type } : undefined;
}

// Dal percorso del file al link della pagina (/it/attivita/nome/)
const pageUrl = (path: string) => path.replace(/^\.\.\/pages/, "").replace(/\.md$/, "/");

export function buildFeed(lang: Lang, context: APIContext) {
	const site = context.site ?? new URL("https://maydan.it");
	const t = TESTI[lang];

	const fromMd = (files: Record<string, Md>, category: string, fallbackDate: (fm: Fm) => string | undefined) =>
		Object.entries(files).map(([path, mod]) => {
			const fm = mod.frontmatter;
			return {
				title: fm.title ?? "",
				link: pageUrl(path),
				description: fm.description ?? "",
				pubDate: toDate(fm.date ?? fallbackDate(fm)),
				categories: [category],
				enclosure: enclosure(fm.cover, site),
			};
		});

	const call = calls[lang].active_call;
	const items = [
		// Volumi senza data di uscita: il primo gennaio dell'anno, solo per ordinarli
		...fromMd(volumi[lang], t.volume, (fm) => (fm.year ? `${fm.year}-01-01` : undefined)),
		...fromMd(attivita[lang], t.attivita, () => undefined),
		// La call ha una sua voce solo se non rimanda a un'attività: altrimenti c'è già quella (niente doppioni nella newsletter)
		...(call.more_link ? [] : [{
			title: call.title,
			link: `/${lang}/call-e-linee-guida/`,
			description: (call.deadlines ?? []).join(" · ").replace(/\*+/g, ""),
			pubDate: toDate(call.date),
			categories: [t.call],
			enclosure: enclosure(call.image, site),
			// guid legato al PDF: una call nuova è una voce nuova anche se la pagina è la stessa
			customData: `<guid isPermaLink="false">${new URL(call.pdf_link, site).href}</guid>`,
		}]),
	]
		.filter((i) => i.title)
		// A parità di data (es. due volumi dello stesso anno senza data di uscita) prima il numero più alto
		.sort((a, b) => (b.pubDate?.getTime() ?? 0) - (a.pubDate?.getTime() ?? 0) || b.link.localeCompare(a.link, undefined, { numeric: true }));

	return rss({
		title: t.title,
		description: t.description,
		site,
		items,
		customData: `<language>${lang}</language>`,
		trailingSlash: true,
	});
}
