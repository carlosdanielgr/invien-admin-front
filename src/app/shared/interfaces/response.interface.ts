export interface Response<T> {
  data: T;
  page: number;
  limit: number;
  total: number;
}
