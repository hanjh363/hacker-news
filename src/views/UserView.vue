<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :user-info="userItem">
      <div slot="userName">{{ userItem.id }}</div>
      <span slot="userKarma">{{ userItem.karma }} karma</span>
    </user-profile>
  </div>
</template>

<script lang="ts">
import { ActionTypes } from '@/typings/enums';
import { User } from '@/typings/interface';
import bus from '@/utils/bus';
import Vue from 'vue';
import UserProfile from '../components/UserProfile.vue';

export default Vue.extend({
  components: {
    UserProfile,
  },

  data() {
    return {
      userItem: {} as User,
    };
  },

  created() {
    bus.$emit('off:progress');
    this.fetchUser();
  },

  mounted() {
    bus.$emit('off:progress');
  },

  methods: {
    async fetchUser() {
      const id = this.$route.params.id;
      this.userItem = await this.$store.dispatch(ActionTypes.FETCH_USER, id);
    },
  },
});
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>
