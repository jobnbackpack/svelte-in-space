export type LaunchListDto = {
    count: number;
    next: string | null;
    previous: string | null;
    results: LaunchDto[];
};

export type LaunchDto = {
    id: string;
    image: string;
    infographic: any;
    landing: any;
    landing_success: any;
    last_updated: string;
    launcher: any;
    location: string;
    lsp_name: string;
    mission: string;
    mission_type: string;
    name: string;
    net: string;
    net_precision: any;
    orbit: string;
    pad: string;
    slug: string;
    status: { id: number; name: string; abbrev: string; description: string };
    url: string;
    window_end: string;
    window_start: string;
};

export async function getAll(): Promise<LaunchListDto> {
    const res = await fetch(`https://lldev.thespacedevs.com/2.2.0/launch?mode=list`);
    return await res.json();
}
