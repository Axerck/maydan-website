# Documentazione del Sito Web Maydan

Questa guida fornisce una panoramica su come funziona il sito web di Maydan, come è strutturato e come aggiungere o modificare i contenuti. È pensata per chi non ha necessariamente competenze tecniche approfondite.

## 1. Come funziona il sito (Architettura)

Il sito è costruito utilizzando **Astro**, un moderno framework web che genera siti "statici".
In parole semplici:
*   Il sito non ha un database classico (come WordPress o MySQL) che gira su un server.
*   Tutti i contenuti (articoli, pagine, informazioni del team) sono salvati direttamente in **file** all'interno del progetto.
*   Quando il sito viene "costruito" (online o sul tuo computer), Astro legge questi file e crea le pagine web definitive (HTML).

Questo rende il sito molto veloce e sicuro.

## 2. Dove si trovano i contenuti

Tutto il codice e i contenuti si trovano nella cartella `src` (sorgente). Ecco le cartelle più importanti per la gestione dei contenuti:

*   **`src/pages`**: Qui ci sono le pagine vere e proprie del sito.
    *   `src/pages/it`: Contiene le pagine in Italiano.
    *   `src/pages/en`: Contiene le pagine in Inglese.
*   **`src/data`**: Qui ci sono alcuni dati strutturati, come l'elenco dei membri del team.
*   **`public`**: Qui vanno inserite le immagini e i file da scaricare (PDF, ecc.).

## 3. Come creare nuovi contenuti

### Aggiungere una nuova Attività (es. Evento, Call, Pubblicazione)

Le attività sono gestite come semplici file di testo (formato Markdown `.md`).

1.  Vai nella cartella `src/pages/it/attivita` (o `en/attivita` per l'inglese).
2.  Crea un nuovo file con estensione `.md`, dandogli un nome semplice e descrittivo (es. `nuovo-evento-2025.md`).
3.  All'interno del file, devi inserire due parti:
    *   **L'intestazione (Frontmatter)**: È la parte in alto, racchiusa tra tre trattini `---`. Contiene le informazioni "tecniche" della pagina.
    *   **Il contenuto**: Il testo vero e proprio dell'articolo.

**Esempio di file Attività:**

```markdown
---
layout: ../../../layouts/ActivityLayout.astro
title: "Titolo del Tuo Nuovo Evento"
date: "2025-05-20"
description: "Una breve descrizione che appare nelle anteprime."
cover: "/img/attivita/locandina-evento.webp"
---

Qui inizi a scrivere il testo del tuo articolo. Puoi andare a capo, scrivere paragrafi, ecc.
```

**Spiegazione dei campi:**
*   `layout`: Non toccarlo, dice al sito quale grafica usare.
*   `title`: Il titolo dell'attività.
*   `date`: La data dell'evento (anno-mese-giorno).
*   `description`: Un riassunto breve.
*   `cover`: Il percorso dell'immagine di copertina. L'immagine deve essere caricata nella cartella `public`, quindi se metti l'immagine in `public/img/attivita/foto.jpg`, qui scriverai `/img/attivita/foto.jpg`.

### Aggiornare il Team

Le informazioni sui membri del team non sono pagine separate, ma sono tutte in un unico file: `src/data/team.ts`.

1.  Apri il file `src/data/team.ts`.
2.  Vedrai una lista di persone racchiuse tra parentesi graffe `{ ... }`.
3.  Per aggiungere una persona, copia un blocco esistente e incollalo dove preferisci, modificando i dati:

```typescript
    {
        name: "Nome Cognome",
        slug: "nome-cognome",
        role: "Redazione",
        affiliation: "Università di Esempio",
        bio: "Qui scrivi la biografia...",
        email: "email@esempio.com",
        image: "/team/foto-persona.png"
    },
```

**Nota:** Anche qui, l'immagine deve essere caricata nella cartella `public/team`.

## 4. Come modificare il sito (Sviluppo Locale)

Se vuoi vedere le modifiche sul tuo computer prima di metterle online:

1.  Assicurati di avere **Node.js** installato.
2.  Apri il terminale nella cartella del progetto.
3.  Scrivi il comando:
    ```bash
    npm run dev
    ```
4.  Il terminale ti dirà un indirizzo (solitamente `http://localhost:4321`). Aprilo nel browser e vedrai il sito. Le modifiche ai file verranno mostrate quasi istantaneamente.
