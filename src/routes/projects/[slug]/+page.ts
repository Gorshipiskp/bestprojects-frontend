import type {PageLoad} from './$types';
import {curProject} from "../../../lib/codelib/stores";

export const load: PageLoad = ({params}): { project: string } => {
    curProject.set(params.slug.toLowerCase());

    return {"project": params.slug.toLowerCase()};
};
