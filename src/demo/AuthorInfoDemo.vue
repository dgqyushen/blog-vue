<template>
<div>
  <v-card class="test-box">
    <v-card-title>
      <v-spacer></v-spacer>
      <v-avatar size="60">
        <img src="../assets/img/avstar.jpg">
      </v-avatar>
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-subtitle style="margin-top: 10px">
      <v-row>
        <v-spacer></v-spacer>
        <div class="author-name">
          <strong>燊</strong>
        </div>
        <v-spacer></v-spacer>
      </v-row>
    </v-card-subtitle>

    <v-card-subtitle style="margin-top: 10px">
      <v-row>
        <v-spacer></v-spacer>
        <div class="author-content">
<!--          以后换成一言api-->
<!--          <strong>小舟从此逝，江海寄余生</strong>-->
          <strong>{{hitokoto}}</strong>
        </div>
        <v-spacer></v-spacer>
      </v-row>
    </v-card-subtitle>

    <v-card-subtitle style="margin-top: 10px">
      <v-row>
        <v-spacer></v-spacer>
        文章
        <v-spacer></v-spacer>
        标签
        <v-spacer></v-spacer>
        分类
        <v-spacer></v-spacer>
      </v-row>
    </v-card-subtitle>

    <v-card-subtitle style="margin-top: 1px">
      <v-row>
        <v-spacer></v-spacer>
        <strong>1</strong>
        <v-spacer></v-spacer>
        <strong>2</strong>
        <v-spacer></v-spacer>
        <strong>3</strong>
        <v-spacer></v-spacer>
      </v-row>
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
<!--      <v-btn color="#4D4A49" class="button" width="200px"><a href="https://github.com/dgqyushen" class="iconfont icongithub" style="color: white"></a></v-btn>-->
            <v-btn color="#5DB0F3" class="button" width="200px"><a href="https://github.com/dgqyushen" class="iconfont icongithub" style="color: white" >关注follow</a></v-btn>
      <v-spacer></v-spacer>
<!--      <v-btn color="primary" class="button" ><a href="http://wpa.qq.com/msgrd?v=3&uin=2446682260&site=qq&menu=yes" style="color: white" class="iconfont iconqq" ></a></v-btn>-->
<!--      <v-btn color="primary" class="button" width="100" @click="init"><a href="#" style="color: white" class="iconfont iconqq" >测试按钮，发送ajax</a></v-btn>-->
<!--      <v-spacer></v-spacer>-->
    </v-card-actions>



  </v-card>
</div>

</template>

<script>
export default {
  name: "AuthorInfoDemo",
  data: function () {
    return {
      hitokoto: '',
      from_who: '',
      from: '',
    }
  },
  methods: {

  },
  computed: {

  },
  beforeMount() {
    const that = this;
    this.$axios.get("https://v1.hitokoto.cn?c=i").then(function (response) {
          console.log(response.data.hitokoto);
          console.log(response.data.from_who);
          console.log(response.data.from);

          let temp_hitokoto = response.data.hitokoto;
          that.hitokoto = temp_hitokoto.slice(0,temp_hitokoto.length-1);
          that.from_who = response.data.from_who;
          that.from = response.data.from;
        }
    )
  }

}
</script>

<style scoped>
.test-box{
  margin-top: 30px;
  padding-bottom: 10px;
}

.author-name{
  font-size: 20px;
}

.author-content{
  font-size: 15px;
  align-content: center;
}







</style>