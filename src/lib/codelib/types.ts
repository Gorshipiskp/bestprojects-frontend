export type ProjectTagsDevelopmentType = "Production" | "In Progress" | "Planning" | "Archived" | "Frozen"
export type RoadmapDateType = `20${number}${number}` | `20${number}${number} Q${1 | 2 | 3 | 4}` | "Будущее"
export type RoadmapType = Record<RoadmapDateType, [target: string, isCompleted: boolean][]>
export type FeaturesThingsType = Record<string, { featureName: string, description: string[] }>
export type ProjectSize = "Idea" | "File" | "Firsts" | "Small" | "Medium" | "Big" | "Main"
export type RGB = [R: number, G: number, B: number]
export type ProjectGradientType = [from: RGB, to: RGB]
export type ProjectImageType = { src: string, description: string }
export type DescriptionType = Record<string, string[]>
export type LicenseType = "MIT" | "Apache 2.0" | "LGPL" | "GNU GPL" | "CC0" | "Private" | "Unlicensed"
export type MonetizeType = "No" | "Yes" | "Planned" | "Freemium"

export type PersonType = { name: string, description: string, links?: Record<string, string>, avatar?: string }
export type PeopleType = Record<string, PersonType>

// todo: Залить SafeFetchLib

export type ProjectInfoType = {
    name: string,
    available: boolean,
    display_name: string,
    stack: string[],
    technologies?: {
        backend?: string[],
        frontend?: string[],
        design?: string[],
        infrastructure?: string[]
    },
    creators: string[],
    tag_development: ProjectTagsDevelopmentType,
    tags: string[],
    features: FeaturesThingsType,
    size: ProjectSize,
    monetized: MonetizeType,
    using: string,
    description_short: string,
    description: DescriptionType,
    prehistory: string[],
    website_link: `https://${string}` | false,
    github_link: `https://${string}` | false,
    release_year: number | false,
    close_year: number | false,
    gradient: ProjectGradientType,
    license: LicenseType,
    roadmap?: RoadmapType,
    media?: {
        logo?: string,
        images?: ProjectImageType[],
        videos?: string[]
    }
}

export type ProjectsInfoType = Record<string, ProjectInfoType>
