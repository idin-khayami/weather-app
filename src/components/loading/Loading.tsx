import { ComponentBaseProps } from '@/types/global.types';

interface LoadingProps extends ComponentBaseProps {
  isLoading?: boolean;
}

export const Loading = ({ isLoading = true, dataTestId }: LoadingProps) => {
  if (!isLoading) return null;

  return <p data-testid={dataTestId}>Loading ...</p>;
};
