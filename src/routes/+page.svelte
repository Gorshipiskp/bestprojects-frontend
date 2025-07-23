<script lang="ts">
    // Я знаю про `$lib`, но WebStorm это не понимает!
    import type {ProjectInfoType} from "../lib/codelib/types";
    import ProjectCard from "../lib/widgets/ProjectCard.svelte";
    import "../lib/scss/projects.scss";
    import {PROJECTS} from "../lib/main_info";

    function filterProjectBy<T extends keyof ProjectInfoType, U extends ProjectInfoType[T]>(
        tag: T,
        value: U
    ): ProjectInfoType[] {
        return Object.values(PROJECTS).filter((project: ProjectInfoType) => project[tag] === value);
    }

    let projectsMain: ProjectInfoType[] = filterProjectBy("size", "Main");
    let projectsBig: ProjectInfoType[] = filterProjectBy("size", "Big");
    let projectsMedium: ProjectInfoType[] = filterProjectBy("size", "Medium");
    let projectsSmall: ProjectInfoType[] = filterProjectBy("size", "Small");
    let projectsFile: ProjectInfoType[] = filterProjectBy("size", "File");
    let projectsIdea: ProjectInfoType[] = filterProjectBy("size", "Idea");
    let projectsFirsts: ProjectInfoType[] = filterProjectBy("size", "Firsts");
</script>

<div class="main_content_projects">
    <div class="main_projects">
        {#each projectsMain as project (project.name)}
            <ProjectCard {project}/>
        {/each}
    </div>
    <div class="big_projects">
        {#each projectsBig as project (project.name)}
            <ProjectCard {project}/>
        {/each}
    </div>
    <div class="medium_projects">
        {#each projectsMedium as project (project.name)}
            <ProjectCard {project}/>
        {/each}
    </div>
</div>
