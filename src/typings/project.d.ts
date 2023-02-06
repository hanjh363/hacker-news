import Vue from 'vue';
import { MyStore } from './types';

// NOTE: `node_module/vuex/types/vue.d.ts`ファイル削除
declare module 'vue/types/vue' {
  interface Vue {
    $store: MyStore;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
