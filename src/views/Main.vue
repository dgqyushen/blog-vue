<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col md="6" cols="12">
        <ArticleSummary></ArticleSummary>
      </v-col>
      <v-col md="2" cols="12">
        <AuthorInfo></AuthorInfo>
        <Info></Info>
        <RunTime></RunTime>
        <CommentList></CommentList>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
import AuthorInfo from "@/components/AuthorInfo";
import Info from "@/components/Info";
import RunTime from "@/components/RunTime"
import ArticleSummary from "@/components/ArticleSummary";
import CommentList from "@/components/CommentList";
export default {
  name: "Main",
  components: {
    AuthorInfo,
    Info,
    RunTime,
    ArticleSummary,
    CommentList
  }
}
</script>

<style scoped>
.test-box{
  margin-top: 30px;
}

.text-box-2{
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>