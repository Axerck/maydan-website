export interface BoardGroup {
    title: string;
    members: { slug: string; role?: string }[];
}

export interface PastBoard {
    year: string;
    groups: BoardGroup[];
}

export const currentBoard: BoardGroup[] = [
    {
        title: "Direttrice responsabile",
        members: [
            { slug: "giulia-gozzini" }
        ]
    },
    {
        title: "Vicedirettore",
        members: [
            { slug: "sebastiano-siviero" }
        ]
    },
    {
        title: "Caporedattrice",
        members: [
            { slug: "chiara-scarfo" }
        ]
    },
    {
        title: "Redazione",
        members: [
            { slug: "federica-bucci" },
            { slug: "lorenzo-ghione" },
            { slug: "enrico-maria-la-forgia" },
            { slug: "sara-manna" },
            { slug: "viola-pacini" },
            { slug: "leonardo-palombini" },
            { slug: "luigi-sausa" },
            { slug: "gaia-sorge" },
            { slug: "marco-spagnoletti" },
            { slug: "carolina-toso" }
        ]
    },
    {
        title: "Tesoriere",
        members: [
            { slug: "pietro-menghini" }
        ]
    },
    {
        title: "Tirocinanti",
        members: [
            { slug: "viola-absinta" }
        ]
    },
    {
        title: "Collaboratori",
        members: [
            { slug: "alessia-daccardio-berlinguer" },
            { slug: "aurora-magliozzi" },
            { slug: "antonio-pacifico" },
            { slug: "luigi-sausa" }
        ]
    }
];

export const pastBoards: PastBoard[] = [
    {
        year: "2025",
        groups: [
            {
                title: "Direttore responsabile",
                members: [{ slug: "antonio-pacifico" }]
            },
            {
                title: "Vicedirettrice",
                members: [{ slug: "aurora-magliozzi" }]
            },
            {
                title: "Caporedattrice",
                members: [{ slug: "gaia-sorge" }]
            },
            {
                title: "Redazione",
                members: [
                    { slug: "alessia-daccardio-berlinguer" },
                    { slug: "federica-bucci" },
                    { slug: "lorenzo-ghione" },
                    { slug: "giulia-gozzini" },
                    { slug: "viola-pacini" },
                    { slug: "luigi-sausa" },
                    { slug: "marco-spagnoletti" }
                ]
            },
            {
                title: "Tesoriere",
                members: [{ slug: "pietro-menghini" }]
            },
            {
                title: "Collaboratori",
                members: [
                    { slug: "annamaria-bianco" },
                    { slug: "federica-stagni" },
                    { slug: "pietro-stefanini" },
                    { slug: "tamara-taher" }
                ]
            }
        ]
    },

    {
        year: "2024",
        groups: [
            {
                title: "Direttore responsabile",
                members: [{ slug: "antonio-pacifico" }]
            },
            {
                title: "Vicedirettrice",
                members: [{ slug: "aurora-magliozzi" }]
            },
            {
                title: "Caporedattrice",
                members: [{ slug: "gaia-sorge" }]
            },
            {
                title: "Redazione",
                members: [
                    { slug: "alessia-daccardio-berlinguer" },
                    { slug: "lorenzo-ghione" },
                    { slug: "noemi-linardi" },
                    { slug: "laura-morreale" },
                    { slug: "viola-pacini" },
                    { slug: "daniele-paolini" },
                    { slug: "luigi-sausa" },
                    { slug: "pietro-stefanini" }
                ]
            },
            {
                title: "Tesoriere",
                members: [{ slug: "pietro-menghini" }]
            },
            {
                title: "Collaboratrici",
                members: [
                    { slug: "annamaria-bianco" },
                    { slug: "federica-stagni" },
                    { slug: "tamara-taher" }
                ]
            }
        ]
    },
    {
        year: "2023",
        groups: [
            {
                title: "Direttore responsabile",
                members: [{ slug: "antonio-pacifico" }]
            },
            {
                title: "Vicedirettore",
                members: [{ slug: "daniele-paolini" }]
            },
            {
                title: "Caporedattrice",
                members: [{ slug: "laura-morreale" }]
            },
            {
                title: "Redazione",
                members: [
                    { slug: "alessia-daccardio-berlinguer" },
                    { slug: "aurora-magliozzi" },
                    { slug: "pietro-menghini" },
                    { slug: "federico-pozzoli" },
                    { slug: "luigi-sausa" },
                    { slug: "federica-stagni" },
                    { slug: "pietro-stefanini" }
                ]
            },
            {
                title: "Collaboratrici",
                members: [
                    { slug: "annamaria-bianco" },
                    { slug: "tamara-taher" }
                ]
            }
        ]
    },
    {
        year: "2022",
        groups: [
            {
                title: "Direttore responsabile",
                members: [{ slug: "antonio-pacifico" }]
            },
            {
                title: "Vicedirettore",
                members: [{ slug: "pietro-menghini" }]
            },
            {
                title: "Caporedattrice",
                members: [{ slug: "alessia-daccardio-berlinguer" }]
            },
            {
                title: "Redazione",
                members: [
                    { slug: "annamaria-bianco" },
                    { slug: "giulia-guidotti" },
                    { slug: "federico-pozzoli" },
                    { slug: "luigi-sausa" },
                    { slug: "federica-stagni" },
                    { slug: "pietro-stefanini" },
                    { slug: "tamara-taher" }
                ]
            }
        ]
    },
    {
        year: "2021",
        groups: [
            {
                title: "Direttore responsabile",
                members: [{ slug: "antonio-pacifico" }]
            },
            {
                title: "Vicedirettrice",
                members: [{ slug: "giulia-guidotti" }]
            },
            {
                title: "Caporedattrice",
                members: [{ slug: "annamaria-bianco" }]
            },
            {
                title: "Redazione",
                members: [
                    { slug: "manuel-capomaccio" },
                    { slug: "alessia-daccardio-berlinguer" },
                    { slug: "pietro-menghini" },
                    { slug: "federico-pozzoli" },
                    { slug: "luigi-sausa" },
                    { slug: "pietro-stefanini" },
                    { slug: "tamara-taher" }
                ]
            }
        ]
    }
];
