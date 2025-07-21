<script lang="ts">
    import '$lib/scss/project_page/project_roadmap.scss'
    import RoadmapDate from "./RoadmapDate.svelte";
    import type {RoadmapDateType, RoadmapType} from "../../codelib/types";
    import MarkedUpText from "../MarkedUpText.svelte";

    export let roadmap: RoadmapType = {} as RoadmapType;
    export let accentColor: string;
    export let fullGradient: string;

    const backgroundImage: string = `linear-gradient(#232323, #232323), ${accentColor}`

    function dateIntoNumber(date: RoadmapDateType): number {
        if (date === "Будущее") return Infinity

        const [year, quarter]: [string, string?] = date.split(" ")

        if (typeof quarter === 'undefined') return +year

        const quarterNumber = (Number(quarter.slice(1)) - 1) * 0.25;
        return +year + quarterNumber
    }

    const sortedDates: string[] = Object.keys(roadmap).sort(
        (a: RoadmapDateType, b: RoadmapDateType) => dateIntoNumber(a) - +dateIntoNumber(b)
    )
    const templateRepeat: string = `repeat(${sortedDates.length}, 1fr)`
</script>

<div class="roadmap" style="background-image: {backgroundImage}">
    <h2 style="background: {accentColor}">Дорожная карта</h2>
    <div class="roadmap_path">
        {#each sortedDates as date, i (i)}
            <RoadmapDate>{date}</RoadmapDate>
        {/each}
    </div>
    <div class="roadmap_plans" style="grid-template-columns: {templateRepeat}">
        {#each sortedDates as date, i (i)}
            <ul style="background-image: {fullGradient}">
                {#each roadmap[date] as [plan, isCompleted], j (j)}
                    {@const completedClass = isCompleted ? "completed" : ""}
                    <li>
                        <span class="{completedClass}"><MarkedUpText textToMarkup={plan}/></span>
                    </li>
                {/each}
            </ul>
        {/each}
    </div>
</div>
