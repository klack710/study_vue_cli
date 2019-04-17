<template>
  <div class="product" v-if="item" key="product">
    <h1>商品情報</h1>
    <dl class="product-table">
      <dt>商品名</dt>
      <dd>{{item.name}}</dd>
      <dt>価格</dt>
      <dd>{{item.price}}</dd>
      <dt>商品説明</dt>
      <dd>{{item.content}}</dd>
    </dl>
  </div>
  <div v-else key="loading">商品情報を読み込んでいます...</div>
</template>

<script>
import products from '@/api/products.js';
export default {
  props: { id: Number },
  data () {
    return {
      item: null
    };
  },
  watch: {
    id: {
      handler () {
        console.log('データ取得開始');
        console.log('現在の読み込み回数:', this.$store.state.count);
        this.$store.commit('increment');
        products.asyncFind(this.id, item => {
          this.item = item;
        });
        console.log('読み込み完了', '現在の読み込み回数:', this.$store.state.count);
      },
      immediate: true
    }
  }
};
</script>
