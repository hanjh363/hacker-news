import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { ItemView, UserView } from '../views';
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView'),
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
