<template>
<div>
  <div class="comment-title">
    <i class="iconfont iconpinglunzu" />评论
  </div>
  <v-textarea placeholder="留下大侠姓名" auto-grow rows="1" v-model="commentAuthor"></v-textarea>
  <v-textarea outlined placeholder="大侠请留步，留下评论再走也不迟！" clearable clear-icon="mdi-close-circle" v-model="commentContent" auto-grow counter></v-textarea>
  <div>
    <div>
      <input type="button" value="发送" class="submit-btn" @click="send">
    </div>
  </div>

  <div v-if="count > 0">
    <div style="margin-bottom: 30px"><strong style="font-size: 20px">{{count}}条评论</strong></div>
<!--    每个评论-->
    <div v-for="(item,index) in commentList" :key="item.id" style="margin-bottom: 10px">
      <v-card>
        <v-card-title>
          <div style="font-size: 15px; font-weight: bold">{{item.author}}</div>
          <div style="font-size: 5px; font-weight: lighter; margin-left: 1%"> 发表时间: {{getCommentTime(item.date)}}</div></v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>{{item.content}}</v-card-text>
      </v-card>
    </div>
  </div>

  <div v-else style="padding:1.25rem;text-align:center">
    来发评论吧
  </div>




</div>
</template>

<script>
export default {
  name: "Comment",
  data: function () {
    return {
      commentContent:'',
      commentAuthor:'',
      count: '',
      commentList: []
    }
  },
  methods: {
    send: function () {
      const viewComment = {
        commentAuthor: this.commentAuthor,
        commentContent: this.commentContent,
        commentBlogId: parseInt(this.blogId)
      }

      // var that = this;
      // this.$axios.get("http://localhost:8081/comment/add", {
      //   params: {
      //     commentAuthor: that.commentAuthor,
      //     commentContent: that.commentContent,
      //     commentBlogId: that.blogId
      //   }
      // }).then(function (response) {
      //   console.log(response);
      // })

      this.$axios.post("http://localhost:8081/comment/add",viewComment).then(function (resp) {
        window.location.reload();
      })
    }

  },
  computed: {
    getCommentTime(){
      return function (commentTime) {
        var split = commentTime.split("T");
        return split[0];

      }

    }
  },
  props: {
    blogId: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  beforeMount() {
    let that = this;
    this.$axios.get("http://localhost:8081/comment/"+this.blogId).then(function (resp) {
      // console.log(resp.data)
      that.commentList = resp.data;
      that.count = that.commentList.length;
      var split = that.commentList[0].date.split('T');
      // console.log(split[0]);


    })
  }


}
</script>

<style scoped>
.comment-title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 10px;
}
.comment-title i {
  font-size: 1.5rem;
  margin-right: 5px;
}
.submit-btn{
  background-color: #1F8CE3;
  position: relative;
  /*margin-top: 0;*/
  border-radius: 3px;
  width: 70px;
  height: 25px;
  color: white;
  margin-bottom: 3px;
  top: -25px;
}
.comment-name{
  margin-bottom: 5px;
  border: none;
  height: 35px;
  width: 300px;

}


</style>