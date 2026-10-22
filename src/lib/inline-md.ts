// Testo di una riga scritto nel CMS con un minimo di formattazione: **grassetto** e *corsivo*.
// Il resto viene messo al sicuro (niente HTML scritto a mano dentro i campi).
const ESC: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

export function inlineMd(text: string): string {
	return text
		.replace(/[&<>"]/g, (c) => ESC[c])
		.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
		.replace(/\*([^*]+)\*/g, "<i>$1</i>");
}

// Come inlineMd, e in più gli indirizzi email diventano link (mailto:)
export function inlineMdEmail(text: string): string {
	return inlineMd(text).replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g, (m) => `<a href="mailto:${m}">${m}</a>`);
}
