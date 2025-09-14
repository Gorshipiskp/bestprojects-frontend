<script lang="ts">
    import "$lib/scss/project_page/project_additional_info.scss";
    import type {ProjectInfoType} from "../../codelib/types";
    import ProjectTechnologiesBlock from "./ProjectTechnologiesBlock.svelte";
    import AdditionalSmallInfo from "./AdditionalSmallInfo.svelte";
    import ProjectTags from "./ProjectTags.svelte";

    export let projectInfo: ProjectInfoType;
    export let accentColor: string;
    const backgroundImage: string = `linear-gradient(#232323, #232323), ${accentColor}`
</script>

<div style="background-image: {backgroundImage}" class="additional_info_content">
    <h2 style="background: {accentColor}">Техническая информация</h2>
    <div class="project_technologies">
        <ProjectTechnologiesBlock title="Backend" technologies={projectInfo.technologies?.backend}/>
        <ProjectTechnologiesBlock title="Frontend" technologies={projectInfo.technologies?.frontend}/>
        <ProjectTechnologiesBlock title="Infrastructure" technologies={projectInfo.technologies?.infrastructure}/>
        <ProjectTechnologiesBlock title="Design" technologies={projectInfo.technologies?.design}/>
    </div>

    <AdditionalSmallInfo projectInfo={projectInfo}/>
    <ProjectTags tags={projectInfo.tags}/>
</div>
