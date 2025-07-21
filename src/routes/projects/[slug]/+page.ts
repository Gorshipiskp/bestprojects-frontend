import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return { "project": params.slug.toLowerCase() };
};
