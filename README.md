# Rivista Maydan

Sito ufficiale della rivista accademica "Maydan", dedicato agli studi sui mondi arabi, semitici e islamici.
Il progetto è costruito con [Astro](https://astro.build/) per garantire performance ottimali e una generazione statica efficiente.

## � Stack Tecnologico

- **Framework:** Astro v4+
- **Linguaggio:** TypeScript / JavaScript
- **Styling:** CSS Custom (basato su variabili, no framework esterni)
- **Framework UI:** React (integrato per eventuali componenti interattivi futuri, icone `lucide-react`)
- **Icone:** Lucide React

## 📂 Struttura del Progetto

Il progetto segue la struttura standard di Astro, con un'organizzazione semantica delle pagine.

```text
/
├── public/                 # Assets statici (immagini, font, favicon)
│   └── logo.png            # Logo principale della rivista
├── src/
│   ├── components/         # Componenti riutilizzabili (se necessari)
│   ├── layouts/            # Layout globali
│   │   └── Layout.astro    # Layout principale (Header, Main, Footer)
│   ├── pages/              # Routing basato su file
│   │   ├── index.astro     # Home Page
│   │   ├── chi-siamo.astro # Pagina "Chi Siamo"
│   │   ├── contatti.astro  # Pagina "Contatti"
│   │   ├── attivita/       # Sezione Attività
│   │   ├── call-e-linee-guida/ # Sezione Call e Linee Guida
│   │   │   ├── index.astro     # Lista Call
│   │   │   └── vol-4.md        # Esempio contenuto in Markdown
│   │   └── pubblicazioni/      # Sezione Pubblicazioni
│   │       ├── index.astro     # Archivio volumi
│   │       └── vol-4.astro     # Dettaglio volume (TOC, Abstracts)
│   └── styles/
│       └── custom.css      # Foglio di stile globale (Typography, Layout, Colors)
└── package.json            # Dipendenze e script
```

## 🎨 Design System e Personalizzazione

Il design del sito è gestito interamente tramite `src/styles/custom.css`. Non vengono utilizzati framework CSS pesanti (come Bootstrap o Tailwind), garantendo un codice pulito e leggero.

### Modifiche Comuni

1. **Logo**: Il logo si trova in `public/logo.png`. Per aggiornarlo, sostituire il file mantenendo lo stesso nome o aggiornare il percorso in `src/layouts/Layout.astro`.
2. **Colori e Font**:
   - I font sono definiti nel `body` in `custom.css` (System UI + Fallback).
   - I colori principali sono definiti nelle variabili CSS o direttamente nelle classi `.btn-primary`, `.site-header`.
3. **Menu di Navigazione**: I link del menu sono gestiti nel file `src/layouts/Layout.astro`.

## 🚀 Comandi Principali

Tutti i comandi devono essere eseguiti dalla root del progetto:

| Comando | Descrizione |
| :--- | :--- |
| `npm install` | Installa le dipendenze del progetto. |
| `npm run dev` | Avvia il server di sviluppo locale a `localhost:4321`. |
| `npm run build` | Compila il sito per la produzione nella cartella `./dist`. |
| `npm run preview` | Anteprima locale della build di produzione. |

## 📝 Aggiunta di Contenuti

- **Nuove Pagine**: Creare un file `.astro` o `.md` nella cartella `src/pages/`.
- **Nuovi Volumi**:
  1. Creare una nuova cartella o file in `src/pages/pubblicazioni/`.
  2. Aggiornare l'indice in `src/pages/pubblicazioni/index.astro`.

## � Build e Deploy

Il sito è statico. Per deployare:
1. Esegui `npm run build`.
2. Carica il contenuto della cartella `dist/` sul tuo server web (Apache, Nginx, Netlify, Vercel, ecc.).
