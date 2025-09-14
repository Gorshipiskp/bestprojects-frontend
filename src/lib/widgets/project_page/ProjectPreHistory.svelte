<script lang="ts">
    import MarkedUpText from "../MarkedUpText.svelte";
    import "$lib/scss/project_page/project_prehistory.scss";

    export let prehistory: string[];
    export let accentColor: string;

    const backgroundImage: string = `linear-gradient(#232323, #232323), ${accentColor}`
</script>


<div class="prehistory" style="background-image: {backgroundImage}">
    <h2 style="background: {accentColor}">Предыстория создания</h2>
    {#each prehistory as paragraph, i (i)}
        <p>
            <MarkedUpText textToMarkup={paragraph}/>
        </p>
    {/each}
</div>
