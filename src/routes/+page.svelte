<script lang="ts">
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import LaunchCard from '$lib/components/LaunchCard.svelte';
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let data: PageData;

    onMount(() => {
        console.log(data);
    });
</script>

<div>
    <LayoutGrid>
        {#each data.list.results as item}
            <Cell span={6}>
                <LaunchCard launch={item} />
            </Cell>
        {/each}
    </LayoutGrid>
</div>
