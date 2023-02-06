<template>
  <div class="home">
    <section class="header-container">
      <UserProfile :user-info="item"></UserProfile>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
      <div class="content" v-html="item.content"></div>
    </section>
    <section>
      <h3>Comments</h3>
      <div v-for="sub in item.comments" :key="sub.id" class="content">
        <UserProfile :user-info="sub"></UserProfile>
        <div v-html="sub.content"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ActionTypes } from '@/typings/enums';
import { Item } from '@/typings/interface';
import bus from '@/utils/bus';
import Vue from 'vue';
import UserProfile from '../components/UserProfile.vue';

export default Vue.extend({
  components: {
    UserProfile,
  },

  data() {
    return {
      item: {} as Item,
    };
  },

  created() {
    bus.$emit('off:progress');
    this.fetchItem();
  },

  mounted() {
    bus.$emit('off:progress');
  },

  methods: {
    async fetchItem() {
      const id = Number(this.$route.params.id);
      this.item = await this.$store.dispatch(ActionTypes.FETCH_ITEM, id);
    },
  },
});
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}

.header-container {
  padding-top: 1rem;
}

.user-container {
  display: flex;
  align-items: center;
}

.fa-user-circle {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}

h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}

.content {
  padding: 0.5rem;
  border: ridge;
}
</style>
