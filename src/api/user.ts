import { User } from '@/typings/interface';
import { AxiosPromise } from 'axios';
import { user } from './common/instance';

// CREATE

// READ
const fetchUser = (id: string): AxiosPromise<User> => {
  return user.get(`${id}.json`);
};

// UPDATE

// DELETE

export { fetchUser };
