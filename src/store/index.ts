import { RootState } from '@/typings/types';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  getters,
  actions,
  mutations,
};

export default new Vuex.Store(store);
