import { ApiError } from 'next/dist/server/api-utils';

export interface Location {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
}

export interface Country {
  ID: string;
  LocalizedName: string;
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
}

export interface LocationAPiRequest {
  query: string;
  language?: string;
}

export type LocationApiSuccess = Location[];

export type LocationApiResponse = LocationApiSuccess | ApiError;
