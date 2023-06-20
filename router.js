import { createRouter, createWebHistory } from "vue-router";
import MainPage from './src/components/Main-page.vue';
import AddNewsPage from './src/components/Add-news-page.vue';
import NewsPage from './src/components/News-Page.vue'

const routes = [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/add-news',
      name: 'AddNewsPage',
      component: AddNewsPage
    },
    {
      path: '/news-page',
      name: 'NewsPage',
      component: NewsPage
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router