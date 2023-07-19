<script lang="ts">
	import Button from '@smui/button';
	import Card from '@smui/card';
	import Banner, { Label as BannerLabel } from '@smui/banner';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	onMount(() => {
		console.log(data);
	});

	let bannerOpen = true;
</script>

<Banner fixed open={bannerOpen} content$style="max-width: max-content;">
	<BannerLabel slot="label">Welcome</BannerLabel>
	<Button slot="actions">Thanks</Button>
</Banner>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<Card padded>
		{#each data.list.results as item}
			<h2>{item.name}</h2>
		{/each}
	</Card>
</div>
