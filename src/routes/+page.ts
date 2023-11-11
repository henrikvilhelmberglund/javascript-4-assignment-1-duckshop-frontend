import { browser } from '$app/environment';
import type { MyError } from '$lib/interfaces.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const parentData = await parent();
	const myError = parentData.e;
	if (myError) {
		if (myError.cause.code === 'ECONNREFUSED') {
			throw error(503, { message: myError.cause.code, extraInfo: 'Server is not responding. Try starting it!' });
		} else {
			throw error(501, { message: myError.cause.code });
		}
	}
}
