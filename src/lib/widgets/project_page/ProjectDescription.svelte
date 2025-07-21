<script lang="ts">
    import "$lib/scss/project_page/project_description.scss";
    import MarkedUpText from "../MarkedUpText.svelte";

    export let curDescription: string;
    export let accentColor: string;

    const backgroundImage: string = `linear-gradient(#232323, #232323), ${accentColor}`
</script>

<div class="description" style="background-image: {backgroundImage}">
    <h2 style="background: {accentColor}">Описание</h2>
    {#each Object.entries(curDescription) as [title, text], i (i)}
        <div>
            <h3>{title}</h3>

            {#each text as paragraph, i (i)}
                <p>
                    <MarkedUpText textToMarkup={paragraph}/>
                </p>
            {/each}
        </div>
    {/each}
</div>
