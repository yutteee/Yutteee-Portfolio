<template>
    <v-container>
        <v-hover  v-for="product in products" :key="product.title" v-slot="{ hover }">
            <v-card :elevation="hover ? 1 : 0"  @click="openWindow(product.url)">
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
export default {
    name: "WorksPage",
    data() {
        return{
            products: [
                {
                    image: require('../assets/logo.svg'),
                    title: "文字稼ぎ",
                    description: "レポートなどの文字数を稼いでくれるアプリです。",
                    url: "#"
                },
                {
                    image: require('../assets/logo.svg'),
                    title: "コナンタイトルジェネレーター",
                    description: "某殺人ラブコメ漫画の映画のタイトルにありそうな文言を生成します。",
                    url: "#"
                },
                {
                    image: require('../assets/logo.svg'),
                    title: "yutteee-portfolio",
                    description: "本ポートフォリオサイトです。",
                    url: "#"
                },
                {
                    image: require('../assets/logo.svg'),
                    title: "hanamaru",
                    description: "タスクを終えると褒めてくれるtodoアプリです。",
                    url: "#"
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