export interface ITopRatedResponse<T> {
  page: number;
  results: T[];
  totalPages: number;
  totalResults: number;
}
