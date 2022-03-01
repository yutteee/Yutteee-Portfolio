<template>
    <header>
    <v-app-bar app color="#fffef9" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-tabs fixed-tabs color="#696969">
        <v-tab v-for="item in items" :key="item.name" :to="item.url">{{ item.name }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.name" :to="item.url">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </header>
</template>

<script>
export default {
    data() {
        return {
            items: [
              {
                name: 'Home',
                url: '/'
              },
              {
                name: 'Skills',
                url: '/skills'
              },
              {
                name: 'Works',
                url: '/works'
              },
              {
                name: 'Contact',
                url: '/contact'
              },
            ],
            drawer: false,
        }
    }
};
</script>

<style scoped>
header {
  font-family: Georgia, serif;
  margin-bottom: 12px;
}

.v-tab {
  display: none;
}

div {
  font-family: Georgia, serif;
}

@media screen and (min-width: 600px) {
  .v-app-bar__nav-icon {
    display: none;
  }

  .v-tab {
    display: flex;
  }

  .v-tabs {
    margin-right: 0 !important;
  }
}

</style>