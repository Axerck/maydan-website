import structure from "../data/structure.json";

// I comitati della redazione (CMS: Struttura redazione). Il comitato corrente è quello con l'anno più recente,
// non il primo della lista: così con «Duplica» basta cambiare l'anno nella copia e il vecchio diventa passato.
export const comitati = [...structure.boards].sort((a, b) => Number(b.year) - Number(a.year));
export const corrente = comitati[0];
export const passati = comitati.slice(1);
