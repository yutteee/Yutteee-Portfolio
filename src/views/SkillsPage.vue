<template>
    <v-container fill-height>
    <MyHeader></MyHeader>
        <v-row class="body">
            <v-col v-for="language in languages" :key="language.name" cols="12" sm="6">
                <v-card elevation="0" color="#fffef9">
                    <v-img :src="language.image" aspect-ratio="1.1" contain max-height="100"></v-img>
                    <v-row justify="center">
                        <v-card-title>{{ language.name }}: {{ language.time }}</v-card-title>
                    </v-row>
                    <p>{{ language.comment }}</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
    name: 'skills',
    components: {
        MyHeader
    },
    data() {
        return {
            languages: [
                {
                    image: require('../assets/HTML:CSS.png'),
                    name: 'HTML/CSS',
                    time: '１年',
                    comment: '初めて触った言語です。フロントの開発がメインなのでずっと使っています。'
                },
                {
                    image: require('../assets/JavaScript.png'),
                    name: 'JavaScript',
                    time: '1年',
                    comment: '初めて個人開発をしたときに使いました。最近は基本的にvue.jsを使って開発しています。'
                },
                {
                    image: require('../assets/Vue.png'),
                    name: 'Vue.js',
                    time: '半年',
                    comment: 'サークルのチーム開発で使用し始めました。今一番力を入れて勉強しています。このポートフォリオもvueで作りました。'
                },
                {
                    image: require('../assets/python.png'),
                    name: 'python',
                    time: '2ヶ月',
                    comment: '学部一年の春休みにバックエンドも始めようということで勉強し始めました。いろんなライブラリがあって楽しいです。'
                },
                {
                    image: require('../assets/GitHub.png'),
                    name: 'GitHub',
                    time: '１年',
                    comment: '現在チーム開発で利用しているので基本的な機能は使えると思います。'
                },
            ]
        }
    }
}
</script>

<style scoped>
.body {
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>