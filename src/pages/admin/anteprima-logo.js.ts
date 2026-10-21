import { TASSELLI, ordine, partenza, PASSO } from "../../lib/logo";

// Anteprima della sezione «Logo» nel CMS: al posto dell'elenco dei colori, il logo vero disegnato con i colori
// che si stanno scegliendo (fermo, entrata e caricamento). Caricato da public/admin/index.html.
// Generato dal disegno di src/lib/logo.ts: è lo stesso logo del sito (src/components/Logo.astro).

const DATI = JSON.stringify({
	tasselli: TASSELLI.map(([transform, gruppo], i) => ({ transform, gruppo, d: ordine(i) * PASSO, ...partenza(i) })),
});

const SCRIPT = `(() => {
const DATI = ${DATI};
const CSS = \`
  body { font-family: system-ui, sans-serif; color: #333; margin: 0; padding: 24px; background: #fff; }
  h3 { font-size: 15px; margin: 28px 0 4px; } h3:first-child { margin-top: 0; }
  p.nota { font-size: 13px; color: #777; margin: 0 0 12px; }
  .riquadro { border: 1px solid #e5e5e5; border-radius: 8px; padding: 24px; overflow: hidden; }
  .riquadro svg { width: 100%; max-width: 420px; height: auto; display: block; overflow: visible; }
  .t, .v { transform-box: fill-box; transform-origin: center; }
  @keyframes entrata {
    0% { opacity: 0; transform: translate(var(--dx), var(--dy)) rotate(var(--r)) scale(.6); }
    8% { opacity: 1; }
    45%, 100% { opacity: 1; transform: none; }
  }
  .entrata .v { animation: entrata 3600ms var(--d) cubic-bezier(.2,.75,.25,1) infinite both; }
  @keyframes giro {
    0%, 100% { fill: var(--rest); transform: scale(1); }
    25% { fill: var(--c); transform: scale(.82); }
    55% { fill: var(--c2); transform: scale(1); }
  }
  .caricamento .t { animation: giro 1400ms var(--d) infinite; }
\`;

const ok = (c, riserva) => (typeof c === "string" && /^#[0-9a-f]{3,8}$/i.test(c.trim()) ? c.trim() : riserva);

function Logo(props) {
  const { rest, palette, classe } = props;
  return h("svg", { viewBox: "0 0 600 250", width: 600, height: 250, className: classe, role: "img", "aria-label": "Logo Maydan" },
    h("defs", {}, h("polygon", { id: "mt-" + classe, points: "0,0 50,0 25,25" })),
    DATI.tasselli.map((t, i) =>
      h("g", { key: i, transform: t.transform },
        h("g", { className: "v", style: { "--dx": t.dx + "px", "--dy": t.dy + "px", "--r": t.r + "deg", "--d": t.d + "ms" } },
          h("use", { href: "#mt-" + classe, className: "t", style: {
            fill: rest[t.gruppo], "--rest": rest[t.gruppo], "--d": t.d + "ms",
            "--c": palette[i % palette.length], "--c2": palette[(i + 2) % palette.length] } })))),
    h("g", { transform: "translate(225, 100) scale(25, 25)", style: { fill: rest.text, fontFamily: 'Palatino, "Palatino Linotype", "Book Antiqua", serif' } },
      h("text", { fontSize: 3, dominantBaseline: "hanging", x: 0, y: 0 }, "Maydan"),
      h("g", { fontSize: 1, transform: "translate(0, 4.05)" },
        h("text", { dominantBaseline: "hanging", x: 0, y: 0 }, "rivista sui mondi"),
        h("text", { dominantBaseline: "hanging", x: 0, y: 1.15 }, "arabi, semitici e islamici"))));
}

const AnteprimaLogo = createClass({
  render: function () {
    const d = this.props.entry.get("data");
    const dati = d && d.toJS ? d.toJS() : {};
    const r = dati.rest || {}, l = dati.loading || {};
    const rest = { big: ok(r.big, "#000000"), lone: ok(r.lone, "#ff0000"), small: ok(r.small, "#008000"), text: ok(r.text, "#000000") };
    const palette = (l.palette || []).map((c) => ok(c, "")).filter(Boolean);
    if (!palette.length) palette.push(rest.big);
    return h("div", {},
      h("style", {}, CSS),
      h("h3", {}, "Il logo nel sito"),
      h("p", { className: "nota" }, "Così appare nell'intestazione di ogni pagina."),
      h("div", { className: "riquadro" }, h(Logo, { rest, palette, classe: "fermo" })),
      h("h3", {}, "Entrata"),
      h("p", { className: "nota" }, "Alla prima pagina di una visita i triangoli arrivano da lontano e compongono il logo. Qui si ripete in continuazione."),
      h("div", { className: "riquadro" }, h(Logo, { rest, palette, classe: "entrata" })),
      h("h3", {}, "Caricamento"),
      l.enabled === false
        ? h("p", { className: "nota" }, "Spento: il logo resta fermo mentre si apre una pagina.")
        : h("p", { className: "nota" }, "Mentre si apre una pagina i colori dell'animazione passano sui triangoli."),
      l.enabled === false ? null : h("div", { className: "riquadro" }, h(Logo, { rest, palette, classe: "caricamento" })));
  },
});

CMS.registerPreviewTemplate("logo", AnteprimaLogo);
})();
`;

export function GET() {
	return new Response(SCRIPT, { headers: { "Content-Type": "text/javascript; charset=utf-8" } });
}
