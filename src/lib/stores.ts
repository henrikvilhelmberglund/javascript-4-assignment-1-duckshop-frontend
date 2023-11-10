import { writable, type Writable } from 'svelte/store';

export const message: Writable<string> = writable('');

export const totalProducts: Writable<number> = writable(0);
