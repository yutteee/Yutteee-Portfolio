<template>
    <v-form class="formrun" action="https://form.run/api/v1/r/59nl5l2o4690lj969u80byve" method="post">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="6">
                    <v-text-field label="お名前" name="お名前"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="所属(会社、大学名など)" name="所属"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="メールアドレス" data-formrun-type="email" data-formrun-required name="メールアドレス"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea label="お問い合わせ内容" data-formrun-required name="お問い合わせ"></v-textarea>
                </v-col>
                <v-btn type="submit" elevation="1" color="#fff">送信</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script src="https://sdk.form.run/js/v2/formrun.js"></script>
<script>
</script>

<style>
</style>