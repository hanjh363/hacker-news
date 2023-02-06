import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import state from '@/store/state';
import { ActionContext, CommitOptions, DispatchOptions, Store } from 'vuex';

type RootState = typeof state;
type Getters = typeof getters;
type Actions = typeof actions;
type Mutations = typeof mutations;

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]>(
    key: K,
    payload?: P,
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

type MyStore = Omit<Store<RootState>, 'commit' | 'dispatch' | 'getters'> &
  MyMutations &
  MyActions &
  MyGetters;

export { RootState, MyActionContext, MyStore };
