import { TASSELLI } from "../../lib/logo";

// Il logo intero di Maydan in nero (simbolo + «Maydan» e sottotitolo), fermo, per le pagine d'accesso
// della redazione (servizio maydan-cms-auth, variabile LOGO_URL). Ha il viewBox, quindi si ridimensiona bene.

export function GET() {
	const tasselli = TASSELLI.map(([transform]) => `<use href="#t" transform="${transform}"/>`).join("");
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="600" height="250" role="img" aria-label="Maydan">
<defs><polygon id="t" points="0,0 50,0 25,25"/></defs>
<g fill="#000">${tasselli}
<g transform="translate(225, 100) scale(25, 25)" font-family="Palatino, 'Palatino Linotype', 'Book Antiqua', serif">
<text font-size="3" dominant-baseline="hanging" x="0" y="0">Maydan</text>
<g font-size="1" transform="translate(0, 4.05)"><text dominant-baseline="hanging" x="0" y="0">rivista sui mondi</text><text dominant-baseline="hanging" x="0" y="1.15">arabi, semitici e islamici</text></g>
</g></g>
</svg>`;
	return new Response(svg, { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
}
