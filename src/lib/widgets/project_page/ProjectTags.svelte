<script lang="ts">
    import "$lib/scss/project_page/project_tags.scss";

    export let tags: string[] = []
</script>

<div class="tags">
    <span class="tag_title">Тэги</span>
    <div class="tags_badges">
        {#each tags as tag, i (i)}
            <span class="tag_badge">{tag}</span>
        {/each}
    </div>
</div>
