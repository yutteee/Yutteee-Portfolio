<template>
  <v-container fill-height class="container">
    <MyHeader></MyHeader>
    <v-row class="body">
      <v-col
        v-for="language in languages"
        :key="language.name"
        cols="12"
        sm="6"
      >
        <v-card elevation="0" color="#fffef9">
          <v-img
            :src="language.image"
            aspect-ratio="1.1"
            contain
            max-height="100"
          ></v-img>
          <v-row justify="center">
            <v-card-title
              >{{ language.name }}: {{ language.time }}</v-card-title
            >
          </v-row>
          <p>{{ language.comment }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyHeader from "../components/MyHeader.vue";

export default {
  name: "skills",
  components: {
    MyHeader,
  },
  data() {
    return {
      languages: [
        {
          image: require("../assets/HTML:CSS.png"),
          name: "HTML/CSS",
          time: "2年",
          comment:
            "初めて触った言語です。フロントの開発がメインなのでずっと使っています。最近はCSSをSassで書くことが多いです。",
        },
        {
          image: require("../assets/JavaScript.png"),
          name: "JavaScript",
          time: "1年半",
          comment:
            "趣味開発でもインターン先でも使ってます。バックは基本Expressを使っているので使用頻度が高いです。",
        },
        {
          image: require("../assets/Vue.png"),
          name: "Vue.js",
          time: "1年半",
          comment:
            "趣味開発でもインターン先でも使っています。一番得意な技術です。最近はVue3に移行したりNext.jsに挑戦したりしています。",
        },
        {
          image: require("../assets/react.svg"),
          name: "React",
          time: "半年",
          comment:
            "複数のチーム開発で使用してます。最近一番よく使っている技術です。",
        },
        {
          image: require("../assets/typescript.svg"),
          name: "TypeScript",
          time: "半年",
          comment:
            "Reactと同時に使い始めました。もうJSに戻れないくらいハマっています。",
        },
        {
          image: require("../assets/flutter.svg"),
          name: "Flutter",
          time: "3ヶ月",
          comment:
            "JPHacksに出た際に使用しました。最近はSwiftメインなのであまり使ってません...",
        },
        {
          image: require("../assets/swift.svg"),
          name: "Swift",
          time: "3ヶ月",
          comment:
            "個人開発で使用しています。SwiftUIでのUIの実装が簡単でとても気に入っています。",
        },
        {
          image: require("../assets/python.png"),
          name: "python",
          time: "1年",
          comment:
            "インターン先でチャットボット開発のためにPythonでCBOWモデルの実装をしました。機械学習メインで使っています。",
        },
        {
          image: require("../assets/mysql.svg"),
          name: "MySQL",
          time: "3ヶ月",
          comment:
            "インターン先でログイン機能やチャット機能の実装のために使用しました。設計はあまり自信がないです。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.body {
  margin-top: 8px;
  margin-bottom: 8px;
}

.container {
  max-width: 1200px;
}
</style>
