<h1>Hello world!</h1>
<div class="parent">
    <div class="child">
        haha
    </div>
</div>
<input type="text" bind:value={label}>
<Nested label={label}>
</Nested>

<script lang="typescript">
    import Nested from './Nested.svelte'
    export let label: string = '';
    $: console.log(label)
</script>

<style lang="scss">
    h1 {
        color: red;
    }
    .parent {
        height: 100px;
        color: green;
        .child {
            height: 150px;
            color: blue;
        }
    }
</style>