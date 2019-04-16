<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'productList'}" tag="button">商品情報</router-link>
      <router-link :to="{ name: 'product', params: { id: 1 } }" tag="button">商品情報1</router-link>
    </nav>
    <router-view/>
  </div>
</template>
