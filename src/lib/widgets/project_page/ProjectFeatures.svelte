<script lang="ts">

    import type {FeaturesThingsType} from "../../codelib/types";
    import "$lib/scss/project_page/project_features.scss";
    import MarkedUpText from "../MarkedUpText.svelte";

    export let features: FeaturesThingsType = {};
    export let accentColor: string;

    const backgroundImage: string = `linear-gradient(#232323, #232323), ${accentColor}`
</script>

<div class="features" style="background-image: {backgroundImage}">
    <h2 style="background: {accentColor}">Особенности</h2>
    {#each Object.entries(features) as [featureID, {featureName, description}], i (i)}
        <div>
            <h3>{featureName}</h3>

            {#each description as paragraph, i (i)}
                <p>
                    <MarkedUpText textToMarkup={paragraph}/>
                </p>
            {/each}
        </div>
    {/each}
</div>

