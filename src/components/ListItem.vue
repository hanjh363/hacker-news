<template>
  <ul class="news-list">
    <li v-for="news in items" :key="news.id" class="post">
      <div class="points">
        {{ news.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a
            ><small v-if="news.domain" class="link-text"
              >({{ news.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link
            ><small
              ><a v-if="news.domain" class="link-text" :href="news.domain"
                >({{ news.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by
          <router-link :to="`/user/${news.user}`" class="link-text">{{
            news.user
          }}</router-link>
        </small>
        <small v-if="news.time_ago" class="link-text">
          {{ fetchTimeAgo(news) }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { List } from '@/typings/interface';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<List[]>,
      required: true,
    },
  },

  methods: {
    fetchTimeAgo(list: List): string {
      // NOTE: type宣言をしているため、
      // 「list.time_ago.」まで入力すると
      // 自動完成機能により関連メソッドが現れる
      return list.time_ago.concat(', 2023');
    },
  },
});
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}

.post {
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}

.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}

.link-text {
  color: #828282;
}

.news-title {
  margin: 0;
}
</style>
