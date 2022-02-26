
<template>
    <v-container>
        <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
        <MyHeader></MyHeader>
        <p>about</p>
        <v-row>
            <v-col cols="2" sm="1">
                <h1>中村優作</h1>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2" sm="1">
                <h2>Nakamura Yusaku</h2>
            </v-col>
            <v-col cols="8" sm="4">
                <v-img src="../assets/yuttee.png"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
                <v-list color="#fffef9">
                    <v-list-item>2002/07/12 生</v-list-item>
                    <v-list-item>愛知県在住</v-list-item>
                    <v-list-item>名古屋大学工学部化学生命工学科に所属している1年生です。大学入学後、アプリ開発サークルに入りプログラミングを始めました。2022年度は副代表を勤めさせていただくことになりました。役職に恥じぬよう日々開発に励んでいます。</v-list-item>
                    <v-list-item>
                        <v-btn href="https://github.com/yutteee" icon>
                            <v-icon class="fab fa-github icon" color="#000"></v-icon>
                        </v-btn>
                        <v-btn href="https://twitter.com/yutteeelog" icon>
                            <v-icon class="fab fa-twitter icon" color="#00acee"></v-icon>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
    name: "home",
    components: {
        MyHeader
    }
}
</script>

<style scoped>
h1, h2 {
    writing-mode: vertical-rl;
}

P {
    margin-bottom: 32px;
    border-bottom: solid;
    display: inline-block;
}
</style>