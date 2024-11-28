import { OriginalData } from '@shared/interfaces/project.interface';

export interface Response<T> {
  data: T;
  page: number;
  limit: number;
  total: number;
  originalData: OriginalData[];
}
