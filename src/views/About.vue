<template>
<div>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="12" md="5">

      <v-card style="margin-top: 30px" class="animated zoomIn article-card">
        <v-card-title>
          <v-spacer></v-spacer>
<!--          <v-avatar><img src="../assets/img/avstar.jpg" alt=""></v-avatar>-->
          <v-avatar class="author-avatar"><v-img src="../assets/img/avstar.jpg"></v-img></v-avatar>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <div class="about-content">
            <strong>个人简介：</strong>
            <div>
            在读大二，新能源专业
            </div>
            <div>
              项目为前端Vue与后端springboot结合，用作自己对springboot的加强使用~
            </div>
          </div>

        </v-card-text>
      </v-card>

    </v-col>
<!--    <v-col cols="12" md="5">-->
<!--      <v-card>-->
<!--        1111-->
<!--      </v-card>-->
<!--    </v-col>-->
    <v-spacer></v-spacer>
  </v-row>



</div>

</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
.about-content{
  padding-left: 10%;
  padding-right: 10%;
}
</style>