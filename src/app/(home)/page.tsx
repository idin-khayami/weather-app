'use client';

import { DailyEvolution } from '@/components/daily-evolution';
import { DailyWeather } from '@/components/daily-weather';
import { SearchForm } from '@/components/search-form';
import WeeklyWeather from '@/components/weekly-weather/WeeklyWeather';

export default function Home() {
  return (
    <main data-testid="homepage">
      <SearchForm dataTestId="searchCityForm" />
      <DailyWeather />
      <WeeklyWeather />
      <DailyEvolution />
    </main>
  );
}
