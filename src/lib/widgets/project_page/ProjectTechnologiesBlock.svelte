<script lang="ts">
    import "$lib/scss/project_page/project_technologies_block.scss";
    import MarkedUpText from "../MarkedUpText.svelte";

    export let title: string;
    export let technologies: string[];

</script>

<div style="grid-area: {title}" class="technologies_block">
    <code>let <span class="technology_title">{title.toLowerCase()}</span>: string[] = &lbrace;</code>
    <ul>
        {#if typeof technologies === "undefined" || technologies.length === 0}
            <li><code>"Список пуст"</code></li>
        {:else}
            {#each technologies as technology, i (i)}
                {@const comma = technologies.indexOf(technology) !== technologies.length - 1 ? "," : ""}
                <li>
                    <code>
                        <MarkedUpText wrappers={{"all": ['"', `"${comma}`]}} defaultTextTag="code" textToMarkup={technology}/>
                    </code>
                </li>
            {/each}
        {/if}
    </ul>
    <code>&rbrace;</code>
</div>
