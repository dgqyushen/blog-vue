<template>
<div>
  <v-card elevation="6" outlined class="test-box">
<!--    <v-card-title>标题测试</v-card-title>-->
<!--    <v-card-subtitle>副标题测试</v-card-subtitle>-->
<!--    <v-card-text>内容测试</v-card-text>-->
<!--    <v-card-actions>-->
<!--      <v-btn>按钮1</v-btn>-->
<!--      <v-btn>按钮2</v-btn>-->
<!--    </v-card-actions>-->
<!--    <div class="web-info-title">-->
<!--      <v-icon size="18">mdi-bell</v-icon>-->
<!--      公告-->
<!--    </div>-->
<!--    <div style="font-size:0.875rem">-->
<!--      这只是一个公告-->
<!--    </div>-->
    <v-card-title>
      <v-icon size="25" style="margin-right: 5px">mdi-bell</v-icon>
      <div style="font-size: 18px">公告栏</div>
    </v-card-title>
    <v-card-text>
      人生就像品茗，懂得吃苦，才能回甘啊。
    </v-card-text>
  </v-card>
</div>

</template>

<script>
export default {
name: "InfoDemo"
}
</script>

<style scoped>
.test-box{
  margin-top: 30px;
}
</style>