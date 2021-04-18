<template>
  <div>
    <v-card outlined class="text-box-2 animated zoomIn article-card" v-for="(item,index) in articleList" :key="item.id" rounded="xl">
      <v-row>

        <v-col md="5" cols="12" :class="isRight(index)">
          <div style="height: 355px; width: 100%" >
            <!--        <v-img class="on-hover" width="100%" height="100%" src="../assets/img/learn-javascript-2-cover.png"/>-->
            <!--        <v-img class="on-hover" width="100%" height="100%" src="https://dgqyushen-blog-images.oss-cn-beijing.aliyuncs.com/1.png"/>-->
            <!--        <img src="file:///E/JavaProjects/img-test/1.png">-->
<!--            <v-img class="on-hover" width="100%" height="100%" src="http://tva4.sinaimg.cn/large/005IuFOngy1go5nnmr4bij31400m80v6.jpg"/>-->
            <router-link :to="'/articles'+'/'+item.blogId">
              <v-img :class="isLeft(index)" width="100%" height="100%" :src="item.blogImage"/>
            </router-link>

<!--            <img :src="item.blogImage" width="100%" height="100%" style="border-radius: 20px">-->
          </div>
        </v-col>

        <v-col md="7" cols="12" order-md="2" style="padding-left: 3%;">
          <div>
            <v-card-title>
              <!--            绑定title-->
              <router-link :to="'/articles'+'/'+item.blogId">
                {{ item.blogTitle }}
              </router-link>

            </v-card-title>
            <v-card-subtitle>
              <span v-if="item.isTop" style="color: #FF7242">
                <i class="iconfont iconzhiding"/>置顶
              </span>
              <span>
                <v-icon size="17">mdi-calendar-month-outline</v-icon>
<!--                2021-02-28-->
                {{item.blogCreated}}
              </span>
            </v-card-subtitle>
            <v-card-text>
              <div class="article-content">
                <router-link :to="'/articles'+'/'+item.blogId">
                  <div>
                    {{ replaceTag(item.blogContent) }}
                  </div>
                </router-link>

<!--                {{ item.blogContent }}-->
                <!--              绑定内容-->
              </div>
            </v-card-text>



          </div>
        </v-col>


      </v-row>
    </v-card>
  </div>

</template>

<script>
export default {
  name: "ArticleSummary",
  data: function () {
    return {
      articleList: '',

    }
  },
  computed: {
    isRight() {
      return function(index) {
        if (index % 2 == 0) {
          return "order-md-6"
        }
        return "order-md=1"
      };
    },
    isLeft() {
      return function (index) {
        if (index % 2 == 0) {
          return "right-radius"
        }
        return "left-radius"
      }
    },
    replaceTag() {
      return function (article) {
        return article.replace(/#/g,'');
      }
    }

  },
  beforeMount() {
    var that = this;
     // this.$axios.get("https://www.fastmock.site/mock/9d676fa4124289af454530c1a42418c2/test/blog/test").then(function (response) {
     this.$axios.get("/api/blog/getAll").then(function (response) {
      // console.log(response.data.data);
      that.articleList = response.data.data;
      // console.log(that.articleList);
      // console.log(that.articleList[0].title);
      // console.log(that.articleList[0].content);
      // that.articleList = response.data.data;
      // console.log(response.data.data);
      // console.log(that.articleList);
    })
  }
}
</script>

<style scoped>
.text-box-2 {
  margin-top: 30px;
  height: 355px;
  padding: 0;
  margin-bottom: 30px;

}

.article-content {
  /*line-height: 2;*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*display: -webkit-box;*/
  /*-webkit-line-clamp: 5;*/
  /*-webkit-box-orient: vertical;*/
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: larger;
  margin-top: 6%;
}

/*.article-card{*/
/*  display: flex;*/
/*  align-items: center;*/
/*  height: 280px;*/
/*  width: 100%;*/
/*  margin-top: 20px;*/
/*}*/

.right-radius{
  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;
}

.left-radius{
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
}

</style>