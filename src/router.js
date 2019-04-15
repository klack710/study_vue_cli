import Vue from 'vue';
import VueRouter from 'vue-router';

// ルート用のコンポーネント
import Home from '@/view/Home.vue';
import Product from '@/view/Product.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    }
  ]
});

export default router;
