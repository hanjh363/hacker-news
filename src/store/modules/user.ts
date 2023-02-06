import { fetchUser } from '@/api/user';
import { ActionTypes, MutationTypes } from '@/typings/enums';
import { User } from '@/typings/interface';
import { MyActionContext, RootState } from '@/typings/types';

const state = {
  user: {} as User,
};

const getters = {};

const actions = {
  async [ActionTypes.FETCH_USER]({ commit }: MyActionContext, id: string) {
    const { data } = await fetchUser(id);
    commit(MutationTypes.SET_USER, data);
    return data;
  },
};

const mutations = {
  [MutationTypes.SET_USER](state: RootState, user: User) {
    state.user = user;
  },
};

export { state, getters, actions, mutations };
