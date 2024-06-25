export const apiConfigURL =
  process.env.NEXT_PUBLIC_BASE_API_URL ||
  'https://api.openweathermap.org/data/2.5';

export const apiConfigStaleTime = 4 * 60 * 60 * 1000; // 4h

export const apiConfigKey = process.env.NEXT_PUBLIC_API_KEY as string;

export const HTTP_STATUS_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
