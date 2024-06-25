export interface ComponentBaseProps {
  className?: string;
  dataTestId?: string;
}

export interface ApiError {
  fault: Fault;
}

export interface Fault {
  faultstring: string;
  detail: Detail;
}

export interface Detail {
  errorcode: string;
}
