import { Item } from '@/typings/interface';
import { AxiosPromise } from 'axios';
import { item } from './common/instance';

// CREATE

// READ
const fetchItem = (id: number): AxiosPromise<Item> => {
  return item.get(`${id}.json`);
};

// UPDATE

// DELETE

export { fetchItem };
