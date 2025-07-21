import {PROJECTS} from "../mainInfo";
import type {ProjectGradientType, ProjectInfoType, RGB} from "./types";

export type MarkupType = "code" | "project_reference" | "italic" | "text"
export type MarkableType = Exclude<MarkupType, "text">
export type MarkedUpTextType = { text: string, type: MarkupType }[]
export type MarkableRegexesUpInfo = [regex: RegExp, toReplace: string | false]

const projectsNames: string[] = Object.values(PROJECTS).flatMap((project: ProjectInfoType) => [project.display_name, project.name])

export const DEFAULT_GRADIENT: ProjectGradientType = [[0, 0, 0], [255, 255, 255]]

const MARKABLES_REGEXES: Record<Exclude<MarkableType, "text">, MarkableRegexesUpInfo> = {
    "code": [new RegExp("`[^`]+`"), "`"],
    "project_reference": [new RegExp(`${projectsNames.join("|")}`), false],
    "italic": [new RegExp("//[^`]+//"), "//"],
}

let BRACKETED_MARKABLES_REGEXES: Record<MarkableType, MarkableRegexesUpInfo> = {} as Record<MarkableType, MarkableRegexesUpInfo>

for (let [markupName, markupRegex] of Object.entries(MARKABLES_REGEXES) as [MarkableType, MarkableRegexesUpInfo][]) {
    BRACKETED_MARKABLES_REGEXES[markupName] = [new RegExp(`(${markupRegex[0].source})`), markupRegex[1]]
}

export function isProjectExists(projectName: string): boolean {
    return projectsNames.includes(projectName)
}

export function markupText(text: string): MarkedUpTextType {
    let result: MarkedUpTextType = []

    const cleanRegexes: string[] = Object.values(MARKABLES_REGEXES).map((regex: MarkableRegexesUpInfo): string => regex[0].source)
    const splitRegex: RegExp = new RegExp(`(${cleanRegexes.join("|")})`)

    for (let splitted of text.split(splitRegex)) {
        if (splitted === "") continue

        let matched: boolean = false;

        for (let [markupName, [markupRegex, toReplace]] of Object.entries(BRACKETED_MARKABLES_REGEXES) as [MarkableType, MarkableRegexesUpInfo][]) {
            let match: RegExpMatchArray | null;

            if ((match = markupRegex.exec(splitted)) !== null) {
                let body: string = toReplace ? match[0].replaceAll(toReplace, "") : match[0]

                if (markupName === "project_reference") {
                    if (!isProjectExists(body)) console.warn("Проекта с названием " + body + " не существует")
                }

                result.push({text: body, type: markupName})
                matched = true
                break
            }
        }

        if (!matched) {
            result.push({text: splitted, type: "text"})
        }
    }

    return result
}

export function constructProjectGradient(projectGradient: ProjectGradientType | undefined, deg: number = 200): string {
    const [[rf, gf, bf], [rt, gt, bt]]: [RGB, RGB] = projectGradient || DEFAULT_GRADIENT
    return `linear-gradient(${deg}deg, rgb(${rf}, ${gf}, ${bf}), rgb(${rt}, ${gt}, ${bt}))`
}
