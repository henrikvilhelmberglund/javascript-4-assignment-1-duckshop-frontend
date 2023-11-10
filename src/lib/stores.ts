import { writable, type Writable } from "svelte/store";

export const message: Writable<string> = writable("");