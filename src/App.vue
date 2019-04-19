<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'productList'}" tag="button">商品情報</router-link>
      <router-link :to="{ name: 'product', params: { id: 1 } }" tag="button">商品情報1</router-link>
    </nav>
    <router-view/>
    <p>{{ message }}</p>
    <EditForm/>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue';
export default {
  name: 'app',
  components: { EditForm },
  computed: {
    // ローカルのmessageとストアのmessageを同期
    message () { return this.$store.getters.message; }
  }
};
</script>
