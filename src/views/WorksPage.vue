<template>
    <v-container>
        <MyHeader></MyHeader>
        <v-hover  v-for="product in products" :key="product.title" v-slot="{ hover }">
            <v-card :elevation="hover ? 5 : 1"  @click="openWindow(product.url)" color="#fffef9">
                <v-img :src="product.image" :aspect-ratio="16/9"></v-img>
                <v-row class="row-text">
                    <v-card-title>{{ product.title }}</v-card-title>
                    <v-card-text>{{ product.description }}</v-card-text>
                </v-row>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
    name: "works",
    components: {
        MyHeader
    },
    data() {
        return{
            products: [
                {
                    image: require('../assets/abehiroshi.png'),
                    title: "文字稼ぎ",
                    description: "レポートなどの文字数を稼いでくれるアプリです。",
                    url: "#"
                },
                {
                    image: require('../assets/conantitle.png'),
                    title: "コナンタイトルジェネレーター",
                    description: "某殺人ラブコメ漫画の映画のタイトルにありそうな文言を生成します。",
                    url: "#"
                },
                {
                    image: require('../assets/portfolio.png'),
                    title: "yutteee-portfolio",
                    description: "本ポートフォリオサイトです。",
                    url: "#"
                },
                {
                    image: require('../assets/hanamaru.jpg'),
                    title: "hanamaru",
                    description: "タスクを終えると褒めてくれるtodoアプリです。",
                    url: "https://github.com/mina1112/jackadvice-2021-wb"
                }
            ]
        }
    },
    methods: {
        openWindow: function(productUrl) {
            window.open(productUrl);
        }
    }
}
</script>

<style scoped>
.v-image, .row-text {
    display: flex;
    width: 50%;
}

.v-card {
    display: flex;
    width: 100%;
    margin: 12px;
}

.v-card:nth-child(odd){
    flex-direction: row-reverse;
}
</style>