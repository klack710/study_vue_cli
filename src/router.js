import Vue from 'vue';
import VueRouter from 'vue-router';

// ルート用のコンポーネント
import Home from '@/view/Home.vue';
import Product from '@/view/Product.vue';
import ProductList from '@/view/ProductList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: 'top',
      path: '/',
      component: Home
    },
    {
      name: 'productList',
      path: '/product',
      component: ProductList,
      props: route => ({ id: Number(route.params.id) })
    },
    {
      name: 'product',
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: Number(route.params.id) })
    }
  ]
});

export default router;
