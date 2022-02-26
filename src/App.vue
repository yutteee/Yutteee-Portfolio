<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
div {
  font-family: Georgia, serif;
}

.v-main {
  background-color: #fffef9;
}
</style>
