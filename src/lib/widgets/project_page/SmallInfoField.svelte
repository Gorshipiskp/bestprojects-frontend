<script lang="ts">
    export let title: string
</script>

<div class="small_info_field">
    <h3>{title}</h3>

    <div>
        <slot/>
    </div>
</div>