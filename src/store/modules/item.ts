import { fetchItem } from '@/api/item';
import { ActionTypes, MutationTypes } from '@/typings/enums';
import { Item } from '@/typings/interface';
import { MyActionContext, RootState } from '@/typings/types';

const state = {
  item: {} as Item,
};

const getters = {};

const actions = {
  async [ActionTypes.FETCH_ITEM]({ commit }: MyActionContext, id: number) {
    const { data } = await fetchItem(id);
    commit(MutationTypes.SET_ITEM, data);
    return data;
  },
};

const mutations = {
  [MutationTypes.SET_ITEM](state: RootState, item: Item) {
    state.item = item;
  },
};

export { state, getters, actions, mutations };
