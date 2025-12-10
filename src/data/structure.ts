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
        title: "Direttore responsabile",
        members: [
            { slug: "antonio-pacifico" }
        ]
    },
    {
        title: "Vicedirettrice",
        members: [
            { slug: "aurora-magliozzi" }
        ]
    },
    {
        title: "Caporedattrice",
        members: [
            { slug: "gaia-sorge" }
        ]
    },
    {
        title: "Redazione",
        members: [
            { slug: "federica-bucci" },
            { slug: "lorenzo-ghione" },
            { slug: "giulia-gozzini" },
            { slug: "enrico-maria-la-forgia" },
            { slug: "sara-manna" },
            { slug: "laura-morreale" },
            { slug: "viola-pacini" },
            { slug: "leonardo-palombini" },
            { slug: "luigi-sausa" },
            { slug: "chiara-scarfo" },
            { slug: "sebastiano-siviero" },
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
            { slug: "annamaria-bianco" },
            { slug: "alessia-daccardio-berlinguer" },
            { slug: "pietro-stefanini" }
        ]
    }
];

export const pastBoards: PastBoard[] = [
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
        groups: []
    },
    {
        year: "2022",
        groups: []
    },
    {
        year: "2021",
        groups: []
    }
];
