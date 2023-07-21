<script lang="ts">
    import type { LaunchDto } from '$lib/apis/launch-api';
    import Card from '@smui/card';

    export let launch: LaunchDto;
</script>

<article>
    <Card variant="outlined">
        <div class="card-content-wrapper">
            <div class="card-content">
                <h2>
                    {launch.name}
                </h2>
                <p><strong>Mission: </strong>{launch.mission || 'not known'}</p>
            </div>

            <img src={launch.image} alt="launch" style="object-fit: cover;" />
        </div>
    </Card>
</article>

<style lang="scss">
    article {
        margin: 16px;
    }

    .card-content-wrapper {
        display: flex;

        img {
            max-width: 40%;
        }

        .card-content {
            flex: 1;
            padding: 16px;
        }
    }
</style>
