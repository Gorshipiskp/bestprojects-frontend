import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export const NONE_PROJECT: "NONE_PROJECT" = "NONE_PROJECT";
export let curProject: Writable<string> = writable(NONE_PROJECT)
