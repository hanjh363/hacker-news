<template>
  <div ref="appHeader" class="header" :class="{ fixed: isFixed }">
    <img src="../assets/logo.svg" alt="logo" class="logo" />
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      navHeight: 0,
      isFixed: false,
    };
  },

  mounted() {
    const appHeader = this.$refs.appHeader as HTMLDivElement;
    this.navHeight = appHeader.offsetHeight;
    window.addEventListener('scroll', this.checkHeight);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.checkHeight);
  },

  methods: {
    checkHeight() {
      this.isFixed = window.scrollY > this.navHeight ? true : false;
    },
  },
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 25px;
  color: white;
  background-color: #42b883;
}

a {
  margin: 0 5px;
}

.header a:visited {
  color: white;
}

.header a:active {
  color: #35495e;
}

.fixed {
  position: fixed;
  z-index: 999;
  width: 100%;
}

.logo {
  width: 30px;
  margin-right: 18px;
}
</style>
