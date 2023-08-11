import requireEnv from './requireEnv';

export const VITE_RAPID_API_KEY = requireEnv(
  'VITE_RAPID_API_KEY',
  import.meta.env.VITE_RAPID_API_KEY
);
