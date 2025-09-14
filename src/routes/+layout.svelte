<script lang="ts">
    import "../app.scss";
    import Header from "../lib/widgets/Header.svelte";
    import {onMount} from "svelte";


    function updateWindowWidth() {
        document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);
    }

    onMount(() => {
        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth();
    });
</script>

<svelte:head>
    <title>Проектики Gorshipisk</title>
</svelte:head>

<Header/>
<slot/>
