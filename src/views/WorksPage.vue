<template>
    <v-container>
        <MyHeader></MyHeader>
        <v-hover  v-for="product in products" :key="product.title" v-slot="{ hover }">
            <v-card :elevation="hover ? 5 : 1"  @click="openWindow(product.url)" color="#fffef9">
                <v-img :src="product.image" :aspect-ratio="8/5"></v-img>
                <v-row class="row-text">
                    <v-card-title class="workTitle">{{ product.title }}</v-card-title>
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
                    image: require('../assets/hanamaru.png'),
                    title: "hanamaru (開発中)",
                    description: "タスクを終えると褒めてくれるtodoアプリです。",
                    url: "https://github.com/mina1112/jackadvice-2021-wb"
                },
                {
                    image: require('../assets/portfolio.png'),
                    title: "yutteee-portfolio",
                    description: "本ポートフォリオサイトです。",
                    url: "#"
                },
                {
                    image: require('../assets/conantitle.png'),
                    title: "ランダムの題名",
                    description: "某殺人ラブコメ漫画の映画のタイトルにありそうな文言を生成します。",
                    url: "https://yutteee.tk/"
                },
                {
                    image: require('../assets/earnwords.png'),
                    title: "文字稼ぎ",
                    description: "レポートなどの文字数を稼いでくれるアプリです。",
                    url: "https://yutteee-earnwords.tk/",
                }
            ]
        }
    },
}
</script>

<style scoped>
.v-image, .row-text {
    display: flex;
    width: 50%;
}

.workTitle {
    margin: 0 auto;
}

.row-text {
    text-align: center;
}

.v-card {
    display: flex;
    width: 100%;
    margin-top: 36px;
}

.v-card:nth-child(odd){
    flex-direction: row-reverse;
}

@media screen and (max-width: 599px) {
    .v-image, .row-text {
        width: 100%;
    }

    .v-card {
        flex-direction: column;
    }

    .v-card:nth-child(odd){
        flex-direction: column;
    }
}
</style>