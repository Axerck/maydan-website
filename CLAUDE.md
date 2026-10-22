# Sito Maydan con CMS — note per le sessioni di Claude

Luigi Sausa (proprietario del progetto, scrive in italiano) dà indicazioni precise: se ti scosti da quello che chiede, dillo.
Rispondigli in italiano semplice. Messaggi di commit in inglese (`feat(cms): …`, `fix: …`), salvo quelli generati dal CMS.

Stato aggiornato al 22 ottobre 2026.

## Dove siamo

- **maydan.it serve ancora il sito vecchio** (ramo `main`). Il sito nuovo con il CMS vive sul ramo `cms-integration`,
  in anteprima su https://cms-integration.maydan-website.pages.dev (Cloudflare Pages manda già `X-Robots-Tag: noindex` sulle anteprime).
- Il contenuto di `main` fino all'11 settembre 2026 (Vol. 5, call Giornate 2027, PayPal) è già stato portato su `cms-integration` (commit `caca160`).
  Se su `main` arriva qualcosa di nuovo prima del passaggio, va portato anche qui.
- Il passaggio di maydan.it al CMS si fa **dopo**, quando la redazione è autonoma, e solo dopo aver controllato che non danneggi Google
  (Maydan è il primo risultato per «maydan»): confronta URL, canonical, sitemap, robots, title/description e redirect prima di unire in `main`.

## Com'è fatto

- Astro 5, sito statico; `astro.config.mjs` ha `site: 'https://maydan.it'` e la sitemap. Hosting: Cloudflare Pages, progetto `maydan-website`
  sull'account Cloudflare di Maydan (`maydan-gestionale`), non su quello personale di Luigi. Ogni push su un ramo crea un'anteprima.
- CMS: **Sveltia CMS** (`public/admin/index.html`, versione fissata), configurazione in `public/admin/config.yml`, backend GitHub `Axerck/maydan-website`, ramo `cms-integration`.
  Raccolte: volumi, attività, pagine (it/en), homepage, call e linee guida, team, struttura, logo, pagine del sito, comitato scientifico.
  I dati stanno in `src/data/*.json` e nei `.md` sotto `src/pages/{it,en}/…`.
- Bozze sì, revisione no (`publish_mode: editorial_workflow` con `direct_publish`); alla pubblicazione i salvataggi diventano un solo commit con il nome di chi ha scritto.
- Logo animato generato dalle pagine in `src/pages/admin/*.ts` con i colori della sezione «Logo».
- Redirect permanenti per le pagine del sito vecchio: `public/_redirects` (compreso `/` → `/it/`).
- Avvio in locale: `.claude/launch.json` (`npm run dev` sulla porta 4321). Per provare il CMS sui file locali: `/admin/index.html` in Chromium → «Work with Local Repository».

## Accesso alla redazione

- Due modi: account GitHub, oppure **link via email** mandato solo a chi è amministratore della newsletter `maydan` su e-newsletter.
- Il CMS passa da un worker Cloudflare (`base_url` e `api_root` in `config.yml`): `maydan-cms-auth` sull'account Maydan, codice in `~/Sites/maydan-cms-auth`
  (solo git locale, copia del `src/` di `~/Sites/SeSaMO/sesamo-auth`, ramo `accesso-con-link`: tienili allineati).
  GitHub App «Maydan redazione». Nel piè di pagina «Accedi» porta a `/accedi`.
- Per aggiungere un redattore: renderlo amministratore della newsletter `maydan` su e-newsletter.

## Da fare al passaggio su maydan.it

1. In `~/Sites/maydan-cms-auth/wrangler.toml` cambiare `PANNELLO_REDAZIONE`, `LOGO_URL`, `SITO_URL` verso https://maydan.it/… e ripubblicare il worker.
2. In `config.yml` il `branch` del backend diventa `main`.
3. Regola GitHub «Protect main» (richiede una PR approvata): togliere la regola sulle PR o mettere la GitHub App tra le eccezioni, altrimenti il CMS non può salvare.
   «Proteggi la storia del sito» (niente cancellazioni né force-push su `main` e `cms-integration`) resta.
4. Controlli SEO elencati sopra, poi Search Console (proprietà maydan.it da aggiungere: serve chi gestisce il DNS).

## Newsletter e Google

- L'iscrizione ufficiale oggi è **MailerLite** (modulo `PC44y2` in `src/components/Contatti.astro`, script in `Layout.astro`). Non toglierlo senza che Luigi lo chieda.
- Il form nuovo su e-newsletter (`newsletter.maydan.it`) non è ancora adottato da Maydan, ma è già indicizzato su Google e compare primo per «newsletter maydan».
  La soluzione (interruttore «Visibile sui motori di ricerca» per newsletter) è lavoro del repository e-newsletter (`~/Sites/AWS_Newsletter`), non di questo.
  Al lancio del form nuovo qui si sostituisce il modulo MailerLite. Le campagne di prova dell'archivio di Maydan sono state cancellate il 22 ottobre.
- Il piè di pagina ha il credito «Sito creato con e-newsletter, un servizio di Luigi Sausa».

## In sospeso

- Avviso email di Cloudflare quando un deploy fallisce: Luigi l'ha rimandato, ricordarglielo a fine lavori sul CMS.
- Guida per la redazione, da scrivere per ultima. Deve dire: i PDF vanno compressi prima di caricarli (il CMS comprime solo le immagini, limite 24 MB);
  nelle voci in inglese scegliere il file già caricato invece di ricaricarlo.
  `documentazione.md` e `README.md` sono vecchi (descrivono il sito prima del CMS): vanno rifatti insieme alla guida.
- Il repository resta per ora sull'account personale di Luigi; un giorno, dopo averne parlato con Maydan, passerà all'organizzazione GitHub `RivistaMaydan`
  (allora: `repo:` in `config.yml`, autorizzazione GitHub di Cloudflare Pages, trasferimento della GitHub App).
