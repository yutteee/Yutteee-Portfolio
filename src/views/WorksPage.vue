<template>
  <v-container class="container">
    <MyHeader></MyHeader>
    <v-hover v-for="product in products" :key="product.title" v-slot="{ hover }">
      <v-card :elevation="hover ? 5 : 1" @click="openWindow(product.url)" color="#fffef9">
        <v-img :src="product.image" :aspect-ratio="7 / 4"></v-img>
        <v-row>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-text class="description">{{ product.description }}</v-card-text>
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
          image: require("../assets/jack-blog.png"),
          title: "jack-blog",
          description: "アプリ開発団体jackのブログです。notionAPIとNext.jsで作成しました。",
          url: "https://jackun-blog.vercel.app/",
        },
        {
          image: require("../assets/gather_chatGPT.gif"),
          title: "gather_chatGPT",
          description:
            "gathertownというwebビデオ会議ツールで、chatGPTを用いたチャットボットを設置できます。",
          url: "https://github.com/yutteee/gather_chatGPT",
        },
        {
          image: require("../assets/stech.png"),
          title: "STECHメンバーズサイト",
          description:
            "STECHという学生エンジニア団体のメンバーズサイトです。チームで開発し、デザインとフロントを担当しました。",
          url: "https://www.stech-membership.com/",
        },
        {
          image: require("../assets/CODE_DUEL.png"),
          title: "CODE_DUEL",
          description:
            "プログラミング言語やフレームワークで戦うカードゲームアプリです。大学の同期とチームで開発し、技育campというハッカソンで最優秀賞、技育展というコンテストでゲーム部門優秀賞をいただきました。",
          url: "https://code-duel.onrender.com/",
        },
        {
          image: require("../assets/flowchart.png"),
          title: "point-group",
          description:
            "分子の点群の帰属を決定するサイトです。無機化学の講義がわからなかったので作成しました。",
          url: "https://point-group.netlify.app/",
        },
        {
          image: require("../assets/szenen1.png"),
          title: "szenen1 単語",
          description:
            "szenen1というドイツ語の教科書に対応した単語帳サイトです。ドイツ語の勉強ついでに作成しました。さすがに手動でデータを入れるのは骨が折れて止まっています...",
          url: "https://szenenone.netlify.app/",
        },
        {
          image: require("../assets/portfolio.png"),
          title: "yutteee-portfolio",
          description: "本ポートフォリオサイトです。",
          url: "https://yutteee-portfolio.netlify.app/",
        },
        {
          image: require("../assets/conantitle.png"),
          title: "ランダムの題名",
          description:
            "某殺人ラブコメ漫画の映画のタイトルにありそうな文言を生成するサイトです。初めて個人でゼロから開発したものです。",
          url: "https://conan-title-generator.netlify.app/",
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
.container {
  max-width: 1200px;
}

.description {
  margin: 0 10%;
}

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
