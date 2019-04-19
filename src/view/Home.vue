<template>
  <div class="home">
    <h1>Home</h1>
  </div>
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
