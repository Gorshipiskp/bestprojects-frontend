<script lang="ts">
    import Spinner from "./Spinner.svelte";

    export let width: string
    export let height: string
    export let spinnerSizeCoef: number = 1
</script>

<style lang="scss">
  .placeholder {
    background: linear-gradient(135deg, #3c3c3c, #232323);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    box-shadow: #121212 1px 1px 16px;
  }
</style>

<div>
    <div style="width: {width}; height: {height}" class="placeholder">
        <Spinner sizeCoef={spinnerSizeCoef}/>
    </div>
</div>
