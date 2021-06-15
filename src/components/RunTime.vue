<template>
  <div>
    <v-card outlined class="test-box animated zoomIn article-card">
      <v-card-title>
        <v-icon size="20" style="margin-right: 10px">mdi-chart-line</v-icon>
        <div style="font-size: 15px">
          网站资讯
        </div>
      </v-card-title>

      <v-card-subtitle style="padding-right: 10%">
        <v-row>

          <div style="margin-left: 5%">
            文章数目
          </div>
          <v-spacer></v-spacer>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 40%">
            {{blog_num}}
          </div>

        </v-row>
        <v-row>

          <div style="margin-left: 5%">
            运行时间
          </div>
          <v-spacer></v-spacer>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 29%">
            {{getRunTime}}
          </div>

        </v-row>
        <v-row>

          <div style="margin-left: 5%">
            本站字数
          </div>
          <!--          先写死，后期从后端拿数据-->
          <v-spacer></v-spacer>
          <div style="margin-left: 38%">
            {{characterAccount}}k
          </div>

        </v-row>
        <v-row>

          <div style="margin-left: 5%">
            上次更新时间
          </div>
          <v-spacer></v-spacer>
          <!--          先写死，后期从后端拿数据-->
          <div style="margin-left: 22%">
            {{getLatestUpdate}}
          </div>

        </v-row>
      </v-card-subtitle>

    </v-card>
  </div>

</template>

<script>
export default {
  name: "RunTime",
  data: function () {
    return {
      runtime: '',
      blog_num:'',
      latestDay:'',
      characterAccount: ''
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
    },
    getLatestUpdate: function () {
      let time = new Date().getTime() - new Date(this.latestDay).getTime();
      var msPerDay = 24 * 60 * 60 * 1000;
      var daysold = Math.floor(time / msPerDay);
      var str = "";
      var day = new Date();
      str += daysold + "天";
      // str += day.getHours() + "时";
      return str;
    }
  },
  beforeMount() {
    let that = this;
    this.$axios.get("/api/blog/getBlogNum").then(function (response) {
      that.blog_num = response.data.data;
    });
    this.$axios.get("/api/blog/getLatestDay").then(function (response) {
      that.latestDay = response.data;
    });
    this.$axios.get("/api/blog/getAllBlogsCharacterAccount").then(({data})=>{
      this.characterAccount = data.data/1000;
      this.characterAccount = this.characterAccount.toFixed(1);
    })
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