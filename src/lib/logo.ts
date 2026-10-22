// Il disegno del marchio di Maydan, in comune tra il logo del sito (src/components/Logo.astro)
// e quello della schermata d'accesso del CMS (src/pages/admin/logo.svg.ts).

export type Gruppo = "big" | "lone" | "small";

// Posizione di ogni triangolo e il suo gruppo di colore (dal disegno originale, public/logo_palestina/maydan.svg)
export const TASSELLI: [string, Gruppo][] = [
	["translate(50, 0) rotate(90) scale(1,-1)", "big"],
	["translate(75, 25) rotate(90)", "big"],
	["translate(50, 50) rotate(90) scale(1,-1)", "big"],
	["translate(50, 100) scale(1,-1)", "big"],
	["translate(0, 100)", "lone"],
	["translate(50, 100)", "big"],
	["translate(75, 125) scale(1, -1)", "big"],
	["translate(100, 100)", "big"],
	["translate(75, 125)", "big"],
	["translate(100, 150) scale(1, -1)", "big"],
	["translate(50, 150) rotate(90)", "small"],
	["translate(50, 150) rotate(90) scale(1, -1)", "small"],
	["translate(100, 150)", "big"],
	["translate(125, 175) scale(1, -1)", "big"],
	["translate(0, 200) scale(1, -1)", "small"],
	["translate(50, 200) scale(1, -1)", "small"],
	["translate(125, 175)", "big"],
	["translate(150, 200) scale(1, -1)", "big"],
	["translate(50, 200)", "small"],
	["translate(75, 225) scale(1, -1)", "small"],
	["translate(150, 200)", "big"],
	["translate(75, 225)", "small"],
	["translate(200, 200) rotate(90)", "big"],
];

export const PASSO = 55; // ms tra un tassello e il successivo

// Ordine sparso ma sempre uguale (niente Math.random: la pagina generata non cambia a ogni build)
const ORDINE = TASSELLI.map((_, i) => i).sort((a, b) => ((a * 7 + 3) % 23) - ((b * 7 + 3) % 23));
export const ordine = (i: number) => ORDINE.indexOf(i);

// Da dove parte ogni tassello nell'entrata: sparso intorno al logo, a distanza e angolo diversi, girato.
// Numeri pseudo-casuali ma fissi (stesso risultato a ogni build). Le misure sono nelle unità del disegno.
const caso = (i: number, k: number) => {
	const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
	return x - Math.floor(x);
};
export function partenza(i: number) {
	const angolo = caso(i, 1) * Math.PI * 2;
	const raggio = 160 + caso(i, 2) * 200;
	return {
		dx: Math.round(Math.cos(angolo) * raggio),
		dy: Math.round(Math.sin(angolo) * raggio * 0.6), // meno in verticale: l'intestazione è bassa
		r: Math.round((caso(i, 3) - 0.5) * 360),
	};
}
