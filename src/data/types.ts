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

export interface HomepageHero {
  title: string;
  deadline_abstract_label: string;
  deadline_abstract: string;
  deadline_paper_label: string;
  deadline_paper: string;
  pdf_link: string;
  pdf_button_label: string;
  image: string;
  image_alt: string;
}

export interface HomepageCard {
  title: string;
  image: string;
  image_alt: string;
  description: string;
  link: string;
  link_label: string;
}

export interface HomepageActivityItem {
  label: string;
  link?: string;
}

export interface HomepageAltroItem {
  label: string;
  link?: string;
}

export interface HomepageAltroSection {
  title: string;
  items?: HomepageAltroItem[];
}

export interface HomepageActivitiesCard {
  title: string;
  items: HomepageActivityItem[];
  main_link: string;
  main_link_label: string;
  altro_section?: HomepageAltroSection;
}

export interface HomepageLogo {
  name: string;
  image: string;
  url: string;
}

export interface HomepageCollaborations {
  title: string;
  logos: HomepageLogo[];
}

export interface HomepageData {
  hero: HomepageHero;
  latest_issue_card: HomepageCard;
  comunicato_card: HomepageCard;
  activities_card: HomepageActivitiesCard;
  collaborations: HomepageCollaborations;
}

export interface ActiveCall {
  section_title: string;
  title: string;
  image: string;
  image_alt: string;
  pdf_link: string;
  deadlines: string[];
}

export interface GuidelineDocument {
  label: string;
  pdf: string;
}

export interface LineeGuida {
  section_title: string;
  documents: GuidelineDocument[];
}

export interface PastCallItem {
  title: string;
  image: string;
  image_alt: string;
  pdf_link: string;
}

export interface PastCalls {
  section_title: string;
  items: PastCallItem[];
}

export interface CallELineeGuidaData {
  active_call: ActiveCall;
  linee_guida: LineeGuida;
  past_calls: PastCalls;
}
