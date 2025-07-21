<script lang="ts">
    import type {MonetizeType, ProjectInfoType} from "../../codelib/types";
    import SmallInfoField from "./SmallInfoField.svelte";
    import MarkedUpText from "../MarkedUpText.svelte";
    import CreatorBadge from "../CreatorBadge.svelte";

    export let projectInfo: ProjectInfoType

    const monetizing: Record<MonetizeType, string> = {
        "No": "Не присутствует",
        "Yes": "Имеется",
        "Planned": "Планируется"
    }
</script>

<div class="small_tech_info">
    <SmallInfoField title="Лицензия">
        {#if projectInfo.license === "Private"}
            <span class="info_field">Не распространяется</span>
        {:else}
            <span class="info_field">{projectInfo.license}</span>
        {/if}
    </SmallInfoField>
    <SmallInfoField title="Github">
        {#if projectInfo.license === "Private"}
            <span class="info_field">Код проекта закрыт</span>
        {:else}
            {#if projectInfo.github_link}
                <a target="_blank" href="{projectInfo.github_link}">
                    <span class="info_field">Ссылка на репозиторий</span>
                </a>
            {:else}
                <span class="info_field">Код не выложен (закрыт)</span>
            {/if}
        {/if}
    </SmallInfoField>
    <SmallInfoField title="Участники">
        {#if projectInfo.creators.length === 0}
            <span class="info_field">Проект создавался в одиночку</span>
        {:else}
            <span class="info_field">
                {#each projectInfo.creators as creator, i (i)}
                    <CreatorBadge creator={creator}/>
                {/each}
            </span>
        {/if}
    </SmallInfoField>
    <SmallInfoField title="Использование">
        <span class="info_field"><MarkedUpText textToMarkup={projectInfo.using}/></span>
    </SmallInfoField>
    <SmallInfoField title="Монетизация">
        <span class="info_field">{monetizing[projectInfo.monetized]}</span>
    </SmallInfoField>
    <SmallInfoField title="Годы работы">
        {#if projectInfo.release_year}
            <span class="info_field">C {projectInfo.release_year}-го</span>
        {/if}
        {#if projectInfo.close_year}
            <span class="info_field">по {projectInfo.close_year}-й</span>
        {/if}
        {#if !projectInfo.close_year && !projectInfo.release_year}
            <span class="info_field">Релиза не было</span>
        {/if}
    </SmallInfoField>
</div>