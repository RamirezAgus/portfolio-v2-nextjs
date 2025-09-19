//ARCHIVED FILE - DO NOT USE

export type PersonalInfo = {
    name: string;
    title: string;
    location: string;
    bio: string;
}

export type ContactInfo = {
    email: string;
    cv: string;
    linkedin: string;
    github: string;
    website: string;
}

export type Skills = {
    language: string[];
    frameworks: string[];
    tools: string[];
}

export type Projects = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    live_url: string;
    code_repo: string;
    cover: string;
}

export type Education = {
    id: string;
    institution: string;
    degree: string;
    description: string;
    startDate: string;
    endDate: string;
}

export type Data = {
    personalInfo: PersonalInfo;
    contactInfo: ContactInfo;
    skills: Skills;
    projects: Projects[];
    education: Education[];
}