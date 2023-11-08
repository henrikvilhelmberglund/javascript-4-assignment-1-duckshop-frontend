import { env } from '$env/dynamic/public';

// need to use a network IP when testing on mobile!
export const FETCH_URL = env.PUBLIC_HENRIK_PC ? '192.168.1.64' : 'localhost';
