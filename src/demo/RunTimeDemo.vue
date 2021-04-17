<template>
  <div>
    <!--  <v-card elevation="6" outlined class="test-box">-->
    <!--    <v-card-title>标题测试</v-card-title>-->
    <!--    <v-card-subtitle>副标题测试</v-card-subtitle>-->
    <!--    <v-card-text>内容测试</v-card-text>-->
    <!--    <v-card-actions>-->
    <!--      <v-btn>按钮1</v-btn>-->
    <!--      <v-btn>按钮2</v-btn>-->
    <!--    </v-card-actions>-->
    <!--  </v-card>-->
    <v-card elevation="6" outlined class="test-box">
      <v-card-title>
        <v-icon size="15" style="margin-right: 10px">mdi-chart-line</v-icon>
        <div style="font-size: 15px">
          网站咨询
        </div>
      </v-card-title>

      <v-card-subtitle>
        <v-row>
          <div style="margin-left: 10%">
            文章数目
          </div>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 40%">
            10
          </div>
        </v-row>
        <v-row>
          <div style="margin-left: 10%">
            运行时间
          </div>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 29%">
            {{getRunTime}}
          </div>
        </v-row>
        <v-row>
          <div style="margin-left: 10%">
            本站字数
          </div>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 38%">
            10k
          </div>
        </v-row>
        <v-row>
          <div style="margin-left: 10%">
            上次更新时间
          </div>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 22%">
            21天前
          </div>
        </v-row>
      </v-card-subtitle>




<!--      <div class="web-info-title">-->
<!--        <v-icon size="18">mdi-chart-line</v-icon>-->
<!--        网站资讯-->
<!--      </div>-->
<!--      <div class="web-info">-->
<!--        <div style="padding:4px 0 0">-->
<!--          运行时间:<span class="float-right">{{ time }}</span>-->
<!--        </div>-->
<!--        <div style="padding:4px 0 0">-->
<!--          总访问量:<span class="float-right">-->
<!--                  1111-->
<!--                </span>-->
<!--        </div>-->
<!--      </div>-->
    </v-card>
  </div>

</template>

<script>
export default {
  name: "RunTimeDemo",
  data: function () {
    return {
      runtime: ''
    }
  },
  methods: {
    countRunTime: function () {
      var timeold = new Date().getTime() - new Date("December 12,2019").getTime();
      var msPerDay = 24 * 60 * 60 * 1000;
      var daysold = Math.floor(timeold / msPerDay);
      var str = "";
      var day = new Date();
      str += daysold + "天";
      str += day.getHours() + "时";
      str += day.getMinutes() + "分";
      str += day.getSeconds() + "秒";
      this.runtime = str;
    }
  },
  computed: {
    getRunTime: function () {
      var timeold = new Date().getTime() - new Date("Feb 26,2021").getTime();
      var msPerDay = 24 * 60 * 60 * 1000;
      var daysold = Math.floor(timeold / msPerDay);
      var str = "";
      var day = new Date();
      str += daysold + "天";
      str += day.getHours() + "时";
      // str += day.getMinutes() + "分";
      // str += day.getSeconds() + "秒";
      return str
      // this.runtime = str;
    }
  }
}
</script>

<style scoped>
.test-box {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
}
</style>