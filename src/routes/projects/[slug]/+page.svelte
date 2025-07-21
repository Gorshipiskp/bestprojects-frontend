<script lang="ts">
    import type {ProjectImageType, ProjectInfoType, ProjectTagsDevelopmentType, RGB} from "../../../lib/codelib/types";
    import {PROJECTS} from "../../../lib/mainInfo";
    import "$lib/scss/project_page.scss";
    import Description from "../../../lib/widgets/project_page/ProjectDescription.svelte";
    import {constructProjectGradient} from "../../../lib/codelib/misc";
    import Tabs from "../../../lib/widgets/Tabs.svelte";
    import {onMount} from "svelte";
    import PreHistory from "../../../lib/widgets/project_page/ProjectPreHistory.svelte";
    import Features from "../../../lib/widgets/project_page/ProjectFeatures.svelte";
    import AdditionalInfo from "../../../lib/widgets/project_page/ProjectAdditionalInfo.svelte";
    import Roadmap from "../../../lib/widgets/project_page/ProjectRoadmap.svelte";

    export let data = {};
    const {project} = data;

    const curInfo: ProjectInfoType = PROJECTS[project];

    const [R, G, B]: RGB = curInfo?.gradient?.[0] ?? [125, 125, 125]
    const gradientAccent: string = `linear-gradient(110deg, rgba(${R}, ${G}, ${B}, 1) 0%, #00000000 80%);`
    const gradient: string = constructProjectGradient(curInfo?.gradient, 95)
    const fullGradient: string = `linear-gradient(#1b1b1b, #1b1b1b), ${gradient}`

    let curTabs: Record<string, HTMLElement> = {}

    onMount(() => {
        function createImg(imgInfo: ProjectImageType): HTMLImageElement {
            const img: HTMLImageElement = document.createElement("img")

            img.src = `${curInfo.name}/${imgInfo.src}`
            img.alt = imgInfo.description

            return img
        }

        function createImgDiv(): HTMLDivElement {
            const imgDiv: HTMLDivElement = document.createElement("div")

            const curImgs = curInfo.media?.images?.map(createImg) ?? []

            curImgs.forEach((img: HTMLImageElement) => {
                imgDiv.appendChild(img)
            })

            return imgDiv
        }

        function createIFrame(): HTMLIFrameElement {
            const iframe: HTMLIFrameElement = document.createElement("iframe")

            iframe.src = curInfo.website_link as string
            iframe.style.backgroundImage = fullGradient
            iframe.title = `Демонстрация ${curInfo.display_name} в iframe`

            return iframe
        }

        if (curInfo.website_link) {
            curTabs["Сайт в iframe"] = createIFrame()
        }
        if (curInfo.media?.images) {
            curTabs["Фотки"] = createImgDiv()
        }

        // todo: Добавить видео
    })

    const developmentTags: Record<ProjectTagsDevelopmentType, string> = {
        "Production": "На продакшене",
        "In Progress": "Разрабатывается",
        "Planning": "Планируется",
        "Frozen": "Временно заморожено",
        "Archived": "Архивировано",
    }
</script>

{#if !curInfo}
    <div class="project_page">
        <div class="title">
            <h1>404</h1>
        </div>
        <div class="description">
            <p>Такого проекта не существует</p>
        </div>
    </div>
{:else}
    <div class="project_page">
        <div class="title" style="background: {gradient}">
            {#if curInfo.media?.logo}
                <img src="/projects/{curInfo.name}/{curInfo.media.logo}" alt="Логотип {curInfo.display_name}"/>
            {/if}
            <h1>{curInfo.display_name}</h1>
        </div>
        <div class="project_stack">
            <ul class="stack_list">
                {#each curInfo.stack as technology, i (i)}
                    <li><code>{technology}</code></li>
                {/each}
            </ul>
            <span class="dev_badge">{developmentTags[curInfo.tag_development]}</span>
        </div>
        <Description accentColor={gradientAccent} curDescription={curInfo.description}/>
        <PreHistory accentColor={gradientAccent} prehistory={curInfo.prehistory}/>
        <Tabs tabs={curTabs}/>
        <Features accentColor={gradientAccent} features={curInfo.features}/>
        <AdditionalInfo accentColor={gradientAccent} projectInfo={curInfo}/>
        <Roadmap accentColor={gradientAccent} fullGradient={fullGradient} roadmap={curInfo.roadmap}/>
    </div>
{/if}

<!-- todo: Проверить грамотность семантики -->
