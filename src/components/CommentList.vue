<template>
<div>
  <v-card class="animated zoomIn article-card" >
    <v-card-title>
      <div>
        <v-icon size="20" style="margin-right: 10px">mdi-chat-processing</v-icon>
        <span style="font-size: 15px">最新评论</span>
      </div>
    </v-card-title>
    <v-card-text>
      <div>

<!--        <span>-->
<!--          <v-avatar color="primary" rounded size="56"><img src="https://www.static.talkxj.com/avatar/blogger.jpg" alt=""></v-avatar>-->
<!--        </span>-->
<!--        <p class="comment-content">-->
<!--          1111111111111111111111111111111111111111111111111111-->
<!--        </p>-->
<!--        <hr style="margin-top: 3px">-->
        <v-row v-for="item in commentList" :key="item.id">
          <v-col cols="12" md="3">
<!--            <v-avatar color="primary" rounded size="56"><img src="https://www.static.talkxj.com/avatar/blogger.jpg" alt=""></v-avatar>-->
            <v-avatar color="primary" rounded size="56"><img :src="item.avatar" alt="" ></v-avatar>
          </v-col>
          <v-col cols="12" md="8" offset-md="1">
            <div class="comment-content">
            <strong>{{item.content}}</strong>
            </div>
            <div style="margin-top: 10px">
              <span>评论文章:{{item.blogId}} </span>
<!--              <span>评论时间:{{item.date}}</span>-->
              <span>评论时间:{{dateFormat(item.date)}}</span>
            </div>
          </v-col>
          <hr>
        </v-row>

      </div>
    </v-card-text>

  </v-card>

</div>

</template>

<script>
export default {
  name: "CommentList",
  data: function () {
    return {
      commentList:''
    }
  },
  beforeMount() {
    const that = this;
    this.$axios.get("/api/comment/get").then(({data})=>{
      that.commentList = data.data;
      // console.log(that.commentList);
    })
  },
  computed:{
    dateFormat(){
      return function (date) {
        var split = date.split("T");
        return split[0];
      }
    }
  }
}
</script>

<style scoped>
.comment-content{
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: larger;
  margin-top: 1%;
}
</style>