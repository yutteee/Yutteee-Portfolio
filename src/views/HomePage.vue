<template>
    <v-container fill-height>
        <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
        <MyHeader></MyHeader>
        <v-row>
            <v-col cols="2" md="1" class="kanji bgextend">
                <div class="name bgappear">中村 優作</div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2" md="1" class="alpha bgextend">
                <div class="name bgappear">Nakamura Yusaku</div>
            </v-col>
            <v-col cols="8" md="4" class="picture fadeup">
                <v-img src="../assets/yuttee.png"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="fadeup last">
                <v-list color="#fffef9">
                    <v-list-item>2002/07/12 生</v-list-item>
                    <v-list-item>愛知県在住</v-list-item>
                    <v-list-item>名古屋大学工学部化学生命工学科に所属している2年生です。大学入学後、アプリ開発サークルに入りプログラミングを始めました。<br/>2022年度は副代表を勤めさせていただくことになりました。役職に恥じぬよう日々開発に励んでいます。</v-list-item>
                    <v-list-item>
                        <v-btn href="https://github.com/yutteee" icon>
                            <v-icon class="fab fa-github" color="#000" x-large></v-icon>
                        </v-btn>
                        <v-btn href="https://twitter.com/yutteeelog" icon>
                            <v-icon class="fab fa-twitter" color="#00acee" x-large></v-icon>
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
.row {
    margin-top: 8px;
    margin-bottom: 8px;
}

.name {
    writing-mode: vertical-rl;
    font-size: 24px;
    margin: 0 auto;
}

.kanji {
    letter-spacing: 4pt;
    padding-right: 0;
    padding-top: 0;
}

.alpha {
    padding-left: 0;
    padding-top: 0;
}

.picture {
    padding-top: 0;
}

.v-btn {
    width: 50%;
}

.v-list-item {
    margin-bottom: 20px;
}

.last {
    display: flex;
    align-items: center;
}

/* 名前のアニメーション */
.bgextend {
    animation-name: bgextendAnime;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    position: relative;
    overflow: hidden;
    opacity: 0;
}

@keyframes bgextendAnime {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.bgappear {
    animation-name: bgextendAnimeSecond;
    animation-duration: 1s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes bgextendAnimeSecond {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.kanji::before {
    animation-name: bgextendFromRight;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #666;
}

@keyframes bgextendFromRight {
    0% {
		transform-origin:right;
		transform:scaleX(0);
	}
	50% {
		transform-origin:right;
		transform:scaleX(1);
	}
	50.001% {
		transform-origin:left;
	}
	100% {
		transform-origin:left;
		transform:scaleX(0);
	}
}

.alpha::before {
    animation-name:bgextendFromLeft;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #666;
}

@keyframes bgextendFromLeft {
    0% {
        transform-origin: left;
        transform: scaleX(0);
    }

    50% {
        transform-origin: left;
        transform: scaleX(1);
    }

    50.001% {
        transform-origin: right;
    }

    100% {
        transform-origin: right;
        transform: scaleX(0);
    }
}

/* fadeupのアニメーション */
.fadeup {
    animation-name:fadeUpAnime;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes fadeUpAnime{
    from {
        opacity: 0;
        transform: translateY(100px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.picture {
    animation-delay: 1s;
}

.last {
    animation-delay: 1.5s;
}
</style>