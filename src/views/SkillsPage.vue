<template>
    <v-container>
    <MyHeader></MyHeader>
        <v-row>
            <v-col v-for="language in languages" :key="language.name" cols="12" sm="6">
                <v-card elevation="0" color="#fffef9">
                    <v-row justify="center">
                        <v-img :src="language.image" aspect-ratio="1.1" contain max-height="100"></v-img>
                    </v-row>
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
                    comment: '初めて触った言語で一番良く使っています。sassを今勉強中です。'
                },
                {
                    image: require('../assets/JavaScript.png'),
                    name: 'JavaScript',
                    time: '１０ヶ月',
                    comment: '個人の開発で利用しています。最近は基本的にvueを使って開発しています。'
                },
                {
                    image: require('../assets/Vue.png'),
                    name: 'Vue.js',
                    time: '５ヶ月',
                    comment: 'サークルのチーム開発で使用しています。今一番力を入れて勉強してる言語です。このポートフォリオもvueで作りました。'
                },
                {
                    image: require('../assets/PHP.png'),
                    name: 'PHP',
                    time: '１ヶ月',
                    comment: '学部一年の春休みにバックエンドも始めようということで勉強し始めました。まだ基礎的な文法しか扱えないのでこれからもっと勉強していくつもりです。'
                },
                {
                    image: require('../assets/GitHub.png'),
                    name: 'GitHub',
                    time: '１年',
                    comment: '今まではずっとファイル管理していたので、本格的に使い始めたのは最近です。現在チーム開発でも利用しているので基本的な機能は使えると思います。'
                },
            ]
        }
    }
}
</script>

<style>
</style>