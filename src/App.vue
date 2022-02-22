<template>
  <v-app>
    <v-app-bar color="#fff" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="logo">Portfolio</v-toolbar-title>
      <v-tabs fixed-tabs>
        <v-tab v-for="(menuItem, index) in menuItems" :key="index">{{ menuItem.name }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index">
          <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
            {
                name: 'Skills',
                url: '#'
            },
            {
                name: 'Works',
                url: '#'
            },
            {
                name: 'Contact',
                url: '#'
            },
            ],
            drawer: false,
        }
    }
};
</script>

<style>
.logo {
  overflow: visible !important;
}

.v-tab {
  display: none !important;
}

@media screen and (min-width: 600px) {
  .v-app-bar__nav-icon {
    display: none !important;
  }

  .v-tab {
      display: flex !important;
  }

}

</style>
