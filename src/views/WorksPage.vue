<template>
  <v-container>
    <MyHeader></MyHeader>
    <v-hover
      v-for="product in products"
      :key="product.title"
      v-slot="{ hover }"
    >
      <v-card
        :elevation="hover ? 5 : 1"
        @click="openWindow(product.url)"
        color="#fffef9"
      >
        <v-img :src="product.image" :aspect-ratio="8 / 5"></v-img>
        <v-row>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-text>{{ product.description }}</v-card-text>
        </v-row>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import MyHeader from "../components/MyHeader.vue";

export default {
  name: "works",
  components: {
    MyHeader,
  },
  data() {
    return {
      products: [
        {
          image: require("../assets/flowchart.png"),
          title: "point-group",
          description: "分子の点群の帰属を決定するサイトです。",
          url: "https://point-group.netlify.app/",
        },
        {
          image: require("../assets/szenen1.png"),
          title: "szenen1 単語",
          description:
            "szenen1というドイツ語の教科書に対応した単語帳サイトです。",
          url: "https://szenenone.netlify.app/",
        },
        {
          image: require("../assets/portfolio.png"),
          title: "yutteee-portfolio",
          description: "本ポートフォリオサイトです。",
          url: "#",
        },
        {
          image: require("../assets/conantitle.png"),
          title: "ランダムの題名",
          description:
            "某殺人ラブコメ漫画の映画のタイトルにありそうな文言を生成します。",
          url: "https://yutteee.tk/",
        },
      ],
    };
  },
  methods: {
    openWindow: function (productUrl) {
      window.open(productUrl);
    },
  },
};
</script>

<style scoped>
.v-image,
.row {
  display: flex;
  width: 50%;
}

.v-card__title {
  margin: 0 auto;
}

.row {
  text-align: center;
}

.v-card {
  display: flex;
  width: 100%;
  margin-top: 36px;
}

.v-card:nth-child(odd) {
  flex-direction: row-reverse;
}

@media screen and (max-width: 599px) {
  .v-image,
  .row {
    width: 100%;
  }

  .v-card {
    flex-direction: column;
  }

  .v-card:nth-child(odd) {
    flex-direction: column;
  }
}
</style>
