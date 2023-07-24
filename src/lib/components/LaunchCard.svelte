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
                <p>
                    <strong>Date: </strong>{new Date(launch.net).toLocaleString('de') ||
                        'not known'}
                </p>
                <p><strong>Location: </strong>{launch.location || 'not known'}</p>

                <p>
                    <strong>Status: </strong><span
                        class={launch.status.id === 4
                            ? 'fail'
                            : launch.status.id === 3
                            ? 'success'
                            : ''}>{launch.status.name || 'not known'}</span
                    >
                </p>
            </div>

            {#if !!launch.image}
                <img src={launch.image} alt="launch" style="object-fit: cover;" />
            {/if}
        </div>
    </Card>
</article>

<style lang="scss">
    article {
        margin: 16px;
    }

    .fail {
        color: red;
    }

    .success {
        color: green;
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
