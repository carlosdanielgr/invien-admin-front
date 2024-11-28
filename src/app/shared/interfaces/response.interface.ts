import { OriginalData } from '@shared/project.interface';

export interface Response<T> {
  data: T;
  page: number;
  limit: number;
  total: number;
  originalData: OriginalData[];
}
