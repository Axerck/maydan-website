import logo from "../../data/logo.json";
import { TASSELLI, ordine, PASSO } from "../../lib/logo";

// Il marchio (solo i triangoli) per la schermata d'accesso del CMS: logo_url in public/admin/config.yml.
// È un'immagine, quindi l'animazione sta tutta dentro l'SVG: i colori passano sui tasselli in giro, senza fine.
// Prende i colori scelti nel CMS (src/data/logo.json): cambiano qui alla pubblicazione successiva.

// Solo colori veri dentro lo stile (il file lo scrive chi usa il CMS)
const colore = (c: unknown, riserva: string) => (typeof c === "string" && /^#[0-9a-f]{3,8}$/i.test(c.trim()) ? c.trim() : riserva);

export function GET() {
	const rest = {
		big: colore(logo.rest.big, "#000000"),
		lone: colore(logo.rest.lone, "#ff0000"),
		small: colore(logo.rest.small, "#008000"),
	};
	const palette = logo.loading.palette.map((c) => colore(c, "")).filter(Boolean);
	if (!palette.length) palette.push(rest.big);
	const anima = logo.loading.enabled;

	const tasselli = TASSELLI.map(([transform, gruppo], i) => {
		const style = `--rest:${rest[gruppo]};--c:${palette[i % palette.length]};--c2:${palette[(i + 2) % palette.length]};animation-delay:${ordine(i) * PASSO}ms`;
		return `<g transform="${transform}"><use href="#t" class="t" style="${style}"/></g>`;
	}).join("");

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 210 260" width="210" height="260" role="img" aria-label="Maydan">
<style>
.t{fill:var(--rest);transform-box:fill-box;transform-origin:center}
${anima ? `.t{animation:giro 1400ms infinite both}
@keyframes giro{0%,100%{fill:var(--rest);transform:scale(1)}25%{fill:var(--c);transform:scale(.82)}55%{fill:var(--c2);transform:scale(1)}}
@media (prefers-reduced-motion:reduce){.t{animation:none}}` : ""}
</style>
<defs><polygon id="t" points="0,0 50,0 25,25"/></defs>
${tasselli}
</svg>`;
	return new Response(svg, { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
}
