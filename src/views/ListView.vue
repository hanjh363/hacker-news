<template>
  <div>
    <list-item :items="listItems"></list-item>
  </div>
</template>

<script lang="ts">
import { ActionTypes } from '@/typings/enums';
import { List } from '@/typings/interface';
import bus from '@/utils/bus';
import Vue from 'vue';
import ListItem from '../components/ListItem.vue';

export default Vue.extend({
  components: {
    ListItem,
  },

  data() {
    return {
      listItems: [] as List[],
    };
  },

  created() {
    bus.$emit('on:progress');
    this.fetchListItem();
  },

  methods: {
    async fetchListItem() {
      const site = this.$route.name as string;
      this.listItems = await this.$store.dispatch(ActionTypes.FETCH_LIST, site);
    },
  },
});
</script>

<style></style>
