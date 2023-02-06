import { List } from '@/typings/interface';
import { AxiosPromise } from 'axios';
import { list } from './common/instance';

// CREATE

// READ
const fetchList = (site: string): AxiosPromise<List[]> => {
  return list.get(`${site}/1.json`);
};

// UPDATE

// DELETE

export { fetchList };
