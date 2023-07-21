<script lang="ts">
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import LaunchCard from '$lib/components/LaunchCard.svelte';

    export let data: PageData;

    onMount(() => {
        console.log(data);
    });
</script>

<div>
    {#each data.list.results as item}
        <LaunchCard launch={item} />
    {/each}
</div>
