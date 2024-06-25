import { httpClient } from '@/utils/http-client';

import { LocationAPiRequest, LocationApiResponse } from './locationsApi.types';

export const getAutoCompleteLocations = async ({
  query,
  language,
}: LocationAPiRequest): Promise<LocationApiResponse> => {
  try {
    const params = { q: query, ...(language && { language }) };

    return await httpClient.get<LocationApiResponse>(
      '/locations/v1/cities/autocomplete',
      params,
    );
  } catch (error) {
    console.error('Error while fetching locations', error);
    throw new Error('Failed to fetch locations');
  }
};
