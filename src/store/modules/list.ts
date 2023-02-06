import { fetchList } from '@/api/list';
import { ActionTypes, MutationTypes } from '@/typings/enums';
import { List } from '@/typings/interface';
import { MyActionContext, RootState } from '@/typings/types';

const state = {
  list: [] as List[],
};

const getters = {};

const actions = {
  async [ActionTypes.FETCH_LIST]({ commit }: MyActionContext, site: string) {
    const { data } = await fetchList(site);
    commit(MutationTypes.SET_LIST, data);
    return data;
  },
};

const mutations = {
  [MutationTypes.SET_LIST](state: RootState, list: List[]) {
    state.list = list;
  },
};

export { state, getters, actions, mutations };
