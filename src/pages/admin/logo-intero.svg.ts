import { TASSELLI, ordine, partenza, PASSO } from "../../lib/logo";

// Il logo intero di Maydan in nero (simbolo + «Maydan» e sottotitolo) per le pagine d'accesso della
// redazione (servizio maydan-cms-auth, variabile LOGO_URL). All'apertura i triangoli arrivano da lontano
// e compongono il logo, una volta sola: la stessa entrata della prima visita al sito (Logo.astro).

export function GET() {
	const tasselli = TASSELLI.map(([transform], i) => {
		const p = partenza(i);
		return `<g transform="${transform}"><use href="#t" class="t" style="--dx:${p.dx}px;--dy:${p.dy}px;--r:${p.r}deg;animation-delay:${ordine(i) * PASSO}ms"/></g>`;
	}).join("");
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="600" height="250" role="img" aria-label="Maydan">
<style>
.t{transform-box:fill-box;transform-origin:center;animation:vola 1100ms cubic-bezier(.2,.75,.25,1) both}
@keyframes vola{0%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--r)) scale(.6)}15%{opacity:1}100%{opacity:1;transform:none}}
.nome{animation:appare 800ms 900ms both}
@keyframes appare{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.t,.nome{animation:none}}
</style>
<defs><polygon id="t" points="0,0 50,0 25,25"/></defs>
<g fill="#000">${tasselli}
<g class="nome" transform="translate(225, 100) scale(25, 25)" font-family="Palatino, 'Palatino Linotype', 'Book Antiqua', serif">
<text font-size="3" dominant-baseline="hanging" x="0" y="0">Maydan</text>
<g font-size="1" transform="translate(0, 4.05)"><text dominant-baseline="hanging" x="0" y="0">rivista sui mondi</text><text dominant-baseline="hanging" x="0" y="1.15">arabi, semitici e islamici</text></g>
</g></g>
</svg>`;
	return new Response(svg, { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
}
