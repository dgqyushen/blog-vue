<template>
  <div>
    <div>
      <v-row>
        <v-spacer></v-spacer>
        <v-col md="5" cols="12">
          <v-card style="margin-top: 30px;">
              <v-card-title>目前共计{{ count }}篇文章，继续加油</v-card-title>
            <timeline>
<!--              <timeline-title> 目前共计{{ count }}篇文章，继续加油 </timeline-title>-->

              <timeline-item v-for="item of archiveList" :key="item.id">
                <!-- 日期 -->
<!--                <span class="time">{{ item.blogCreated | date }}</span>-->
                <span class="time">{{item.blogCreated}}</span>
                <!-- 文章标题 -->
                <router-link
                    :to="'/articles/' + item.blogId"
                    style="color:#666;text-decoration: none"
                >
                  {{ item.blogTitle }}
                </router-link>
              </timeline-item>
            </timeline>
            <!-- 分页按钮 -->
            <v-pagination
                color="#00C4B6"
                v-model="current"
                :length="Math.ceil(count / 10)"
                total-visible="7"
            />
          </v-card>
        </v-col>
        <v-col md="2" cols="12">
          <AuthorInfo></AuthorInfo>
          <Info></Info>
          <RunTime></RunTime>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
  </div>

</template>

<script>
import AuthorInfo from "@/components/AuthorInfo";
import Info from "@/components/Info";
import RunTime from "@/components/RunTime"
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

export default {
  name: "TimeStamp",
  data: function () {
    return {
      current: 1,
      count: 0,
      archiveList: []
    }
  },
  components: {
    AuthorInfo,
    Info,
    RunTime,
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  beforeMount() {
    let that = this;
    // this.$axios.get("http://localhost:8081/viewBlog/getAll").then(function (response) {
    this.$axios.get("/api/viewBlog/getAll").then(function (response) {
      // console.log(response.data);
      that.archiveList = response.data;
    });
    this.$axios.get("/api/viewBlog/getNum").then(function (response){
    // this.$axios.get("http://localhost:8081/viewBlog/getNum").then(function (response){
      // console.log(response.data.data);
      that.count = response.data.data;
    })
  }
}
</script>

<style scoped>

</style>