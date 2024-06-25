import { apiConfigURL, apiConfigKey } from '@/constants/http';

export const httpClient = {
  async get<T = unknown>(
    url: string,
    query: Record<string, string>,
  ): Promise<T> {
    const queryStr = new URLSearchParams(
      Object.keys(query).length > 0
        ? { ...query, apikey: apiConfigKey }
        : { apikey: apiConfigKey },
    ).toString();

    const res = await fetch(`${apiConfigURL}${url}?${queryStr}`);

    return await res.json();
  },
};
