<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Card from '@smui/card';
	import Banner, { Label as BannerLabel } from '@smui/banner';

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
		<p>this is a great button</p>
		<Button><Label>test</Label></Button>
	</Card>
</div>
