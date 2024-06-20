export interface Paths {
  homepage: string;
  getModifyRoute: (id: string) => string;
}

export const paths: Paths = {
  homepage: '/',
  getModifyRoute: (id: string) => `/modify/${id}`,
};
