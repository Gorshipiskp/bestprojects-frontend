<script lang="ts">
    import "$lib/scss/about.scss";
    import {onMount} from "svelte";
    import PlaceholderRect from "../../lib/widgets/PlaceholderRect.svelte";

    type imgExtensions = "jpg" | "jpeg" | "png";
    const possiblePhotos: `${string}.${imgExtensions}`[] = [
        "photo_2025-07-12_21-03-01.jpg",
        "set-00482.jpg",
        "set-00094.jpg",
        "photo_2025-07-08_13-18-57.jpg",
        "photo_2025-05-24_16-28-02.jpg",
    ]

    let curPhoto = ""

    let curPhotoIndex: number | undefined

    onMount(() => {
        curPhotoIndex = Math.floor(Math.random() * (possiblePhotos.length - 1)) // -1, чтобы было без последней фотки
        curPhoto = possiblePhotos[curPhotoIndex];
    });

    $: curPhoto = typeof curPhotoIndex === "number" ? possiblePhotos[curPhotoIndex] : "";
</script>

<div class="main_content">
    <h1 class="title_ahahaah_che_ti_tut_delaesh">Обо мне</h1>
    <div class="photo_of_me_yopta">
        {#if curPhoto === ""}
            <PlaceholderRect width="100%" height="700px"/>
        {:else}
            <figure class="photo_of_me_yeah" on:click={() => curPhotoIndex = (curPhotoIndex + 1) % possiblePhotos.length}>
                <img importance="high" loading="eager"
                     src={"/itsme/" + curPhoto} alt="Фото меня"/>
                <figcaption>На фотографию можно кликнуть</figcaption>
            </figure>
        {/if}
    </div>
    <div class="text_about_me_suka">
        <h2>Опа, привет, меня зовут Никита</h2>
        <p>Я создаю полезные и разнотипные проекты — от
            игровых серверов и телеграмм ботов до симуляторов эмерджентных систем и математических движков.
            Люблю строгий и чистый, гибкий и производительный код.</p>
        <p>Пишу на Lua, Python, JavaScript (+TypeScript), Svelte (+SvelteKit), Django, FastAPI.
            Немного касался Java, C, C++, React, Unreal Engine 5. Увлекаюсь архитектурой систем, симуляциями,
            аналитикой и построением умных интерфейсов.</p>
    </div>
</div>
