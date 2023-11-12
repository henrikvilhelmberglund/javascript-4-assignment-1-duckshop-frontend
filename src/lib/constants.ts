import { PUBLIC_HENRIK_PC } from '$env/static/public';

// need to use a network IP when testing on mobile!
export const FETCH_URL = +PUBLIC_HENRIK_PC === 0 ? 'localhost' : '192.168.1.64';
