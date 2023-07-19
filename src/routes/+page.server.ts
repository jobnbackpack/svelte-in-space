import * as launch_api from "$lib/apis/launch-api";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    list: await launch_api.getAll(),
  };
}) satisfies PageServerLoad;
