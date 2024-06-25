import { useQuery } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';

import { apiConfigStaleTime } from '@/constants/http';

import { getAutoCompleteLocations } from './locationsApi';
import { LocationApiResponse, LocationApiSuccess } from './locationsApi.types';

export const locationApiGateway = {
  useGetAutoCompleteLocations: (query: string, enabled: boolean) => {
    return useQuery<LocationApiResponse, ApiError, LocationApiSuccess>({
      queryKey: ['locations', query],
      queryFn: async () => {
        return getAutoCompleteLocations({ query });
      },
      enabled,
      staleTime: apiConfigStaleTime,
    });
  },
};
