<script lang="ts">
    import type {ProjectInfoType} from "../codelib/types";
    import "../scss/project_card.scss"
    import {goto} from "$app/navigation";
    import {constructProjectGradient} from "../codelib/misc";

    export let project: ProjectInfoType

    // todo: Сделать автоматическое обнаруживание названия проектов и вставление ссылки на них

    if (!project) {
        throw new Error("Project is not defined (ProjectCard.svelte)");
    }

    const gradient: string = constructProjectGradient(project.gradient)
</script>


<div role="button" class="project_card" style="background: {gradient}"
     on:click={() => goto(`/projects/${project.name}`, {replaceState: false, noScroll: false})}>
    {#if project.media?.logo}
        <div class="project_card_logo">
            <img src="/projects/{project.name}/{project.media.logo}" alt="Логотип {project.name}"/>
        </div>
    {/if}
    <h2 class="project_card_title">{project.display_name}</h2>
    <span class="project_card_description">{project.description_short}</span>
</div>
