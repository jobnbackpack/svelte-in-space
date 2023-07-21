<script lang="ts">
    import type { LaunchDto } from '$lib/apis/launch-api';
    import Card from '@smui/card';

    export let launch: LaunchDto;
</script>

<article>
    <Card variant="outlined">
        <div class="card-content-wrapper">
            <h2>
                {launch.name}
            </h2>

            <img src={launch.image} alt="launch" width="20vw" style="object-fit: cover;" />
        </div>
    </Card>
</article>

<style lang="scss">
    article {
        margin: 16px;
    }

    .card-content-wrapper {
        display: flex;
    }
</style>
