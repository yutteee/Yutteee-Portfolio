<template>
  <v-app>
    <MyHeader></MyHeader>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'app',
  components: {
    MyHeader
  }
};
</script>

<style>
</style>
