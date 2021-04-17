<template>
<div>
  <v-row>
  <v-spacer></v-spacer>
  <v-col cols="12" md="6">
    <v-card tile style="margin-top: 30px">
<!--      <v-card-subtitle>文章作者：</v-card-subtitle>-->
<!--      <v-card-subtitle>文章链接：</v-card-subtitle>-->
<!--      <v-card-subtitle>文章声明：</v-card-subtitle>-->
      <v-card-text>
        <v-row><div class="item">文章作者：</div> <div>{{author}}</div></v-row>

        <v-row><div class="item">文章链接：</div> <div>{{link}}</div></v-row>

        <v-row><div class="item">文章声明：</div> <div>{{text}}</div></v-row>
      </v-card-text>
    </v-card>
  </v-col>

  <v-spacer></v-spacer>
  </v-row>
</div>

</template>

<script>
export default {
  name: "CopyRights",
  data: function () {
    return{
      author: 'dgqyushen',
      link: 'www.baidu.com',
      text: '本部落格所有文章除特别声明外，均採用 CC BY-NC-SA 4.0 许可协议。转载请註明来自 dgqyushen！'
    }
  }
}
</script>

<style scoped>
.item{
  color: #53B5F6;
}
</style>