export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  affiliation: string;
  affiliation_en?: string;
  bio?: string;
  bio_en?: string;
  image?: string;
  personalLink?: string;
  email?: string;
}

export interface BoardGroup {
  title: string;
  members: { slug: string; role?: string }[];
}

export interface PastBoard {
  year: string;
  groups: BoardGroup[];
}
