<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>

      <v-col md="5" cols="12">
      <ArticleSummaryDemo></ArticleSummaryDemo>

      </v-col>

      <v-col md="2" cols="12">




      <AuthorInfo></AuthorInfo>

      <InfoDemo></InfoDemo>

      <RunTimeDemo></RunTimeDemo>



      </v-col>
      <v-spacer></v-spacer>
    </v-row>







  </div>




</template>

<script>
import AuthorInfo from "@/components/AuthorInfo";
import InfoDemo from "@/demo/InfoDemo";
import RunTimeDemo from "@/demo/RunTimeDemo";
import ArticleSummaryDemo from "@/demo/ArticleSummaryDemo";
export default {
name: "IndexDemo2",
  components: {
    AuthorInfo,
    InfoDemo,
    RunTimeDemo,
    ArticleSummaryDemo
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