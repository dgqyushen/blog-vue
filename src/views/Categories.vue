<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col md="5" cols="12">
        <v-card style="margin-top: 30px">
          <div class="category-title">分类 - {{num}}篇</div>
<!--          <ul class="category-list">-->
<!--            <li class="category-list-item">项目介绍</li>-->
<!--            <li class="category-list-item">生活随笔</li>-->
<!--          </ul>-->
          <ul class="category-list">
            <li class="category-list-item" v-for="item in list" :key="item.id">
              {{item}}
            </li>

          </ul>
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

</template>

<script>
import AuthorInfo from "@/components/AuthorInfo";
import Info from "@/components/Info";
import RunTime from "@/components/RunTime"
export default {
  name: "Categories",
  data: function () {
    return {
      num:'',
      list:''
    }
  },
  components: {
    AuthorInfo,
    Info,
    RunTime,
  },
  beforeMount() {
    this.$axios.get("http://localhost:8081/categories/getAll").then(({data})=>{
      // console.log(data.data.categoriesName);
      this.list = data.data.categoriesName;
      this.num = data.data.num;
    })
  }
}
</script>

<style scoped>
.category-banner {
  background: url(https://www.static.talkxj.com/wallhaven-13mk9v.jpg) center
  center / cover no-repeat;
  background-color: #49b1f5;
}
.category-title {
  text-align: center;
  font-size: 36px;
  line-height: 2;
}
@media (max-width: 759px) {
  .category-title {
    font-size: 25px;
  }
}
.category-list {
  margin: 0 1.8rem;
  list-style: none;
}
.category-list-item {
  padding: 8px 1.8rem 8px 0;
}
.category-list-item:before {
  display: inline-block;
  position: relative;
  left: -0.75rem;
  width: 12px;
  height: 12px;
  border: 0.2rem solid #49b1f5;
  border-radius: 50%;
  background: #fff;
  content: "";
  transition-duration: 0.3s;
}
.category-list-item:hover:before {
  border: 0.2rem solid #ff7242;
}
.category-list-item a:hover {
  transition: all 0.3s;
  color: #8e8cd8;
}
.category-list-item a:not(:hover) {
  transition: all 0.3s;
}
.category-count {
  margin-left: 0.5rem;
  font-size: 0.75rem;
  color: #858585;
}
</style>