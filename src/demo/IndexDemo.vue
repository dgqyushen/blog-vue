<template>
  <div>
    <!-- banner -->
    <div class="home-banner">
      <div class="banner-container">
        <!-- 联系方式 -->
<!--        <h1 class="blog-title animated zoomIn">-->
<!--          风丶宇的个人博客-->
<!--        </h1>-->
        <!-- 一言 -->
<!--        <div class="blog-intro">-->
<!--          {{ obj.output }} <span class="typed-cursor">|</span>-->
<!--        </div>-->
        <!-- 联系方式 -->
<!--        <div class="blog-contact">-->
<!--          <a-->
<!--              class="iconfont iconqq"-->
<!--              target="_blank"-->
<!--              href="http://wpa.qq.com/msgrd?v=3&uin=1192176811&site=qq&menu=yes"-->
<!--          />-->
<!--          <a-->
<!--              target="_blank"-->
<!--              href="https://github.com/X1192176811"-->
<!--              class="ml-5 mr-5 iconfont icongithub"-->
<!--          />-->
<!--          <a-->
<!--              target="_blank"-->
<!--              href="https://gitee.com/feng_meiyu"-->
<!--              class="iconfont icongitee-fill-round"-->
<!--          />-->
<!--        </div>-->
      </div>
      <!-- 向下滚动的箭头 -->
<!--      <div class="scroll-down" @click="scrollDown">-->
<!--        <v-icon color="#fff" class="scroll-down-effects">-->
<!--          mdi-chevron-down-->
<!--        </v-icon>-->
<!--      </div>-->
    </div>

    <!-- 主页文章 -->
<!--    <v-row class="home-container">-->
<!--      <v-col md="9" cols="12">-->
<!--        <v-card-->
<!--            class="animated zoomIn article-card"-->
<!--            v-for="(item, index) of articleList"-->
<!--            :key="item.id"-->
<!--        >-->
<!--          &lt;!&ndash; 文章封面图 &ndash;&gt;-->
<!--          <div :class="isRight(index)">-->
<!--            <router-link :to="'/articles/' + item.id">-->
<!--              <v-img-->
<!--                  class="on-hover"-->
<!--                  width="100%"-->
<!--                  height="100%"-->
<!--                  :src="item.articleCover"-->
<!--              />-->
<!--            </router-link>-->
<!--          </div>-->
<!--          &lt;!&ndash; 文章信息 &ndash;&gt;-->
<!--          <div class="article-wrapper">-->
<!--            <div style="line-height:1.4">-->
<!--              <router-link :to="'/articles/' + item.id">-->
<!--                {{ item.articleTitle }}-->
<!--              </router-link>-->
<!--            </div>-->
<!--            <div class="article-info">-->
<!--              &lt;!&ndash; 是否置顶 &ndash;&gt;-->
<!--              <span v-if="item.isTop == 1">-->
<!--                <span style="color:#ff7242">-->
<!--                  <i class="iconfont iconzhiding"/> 置顶-->
<!--                </span>-->
<!--                <span class="separator">|</span>-->
<!--              </span>-->
<!--              &lt;!&ndash; 发表时间 &ndash;&gt;-->
<!--              <v-icon size="14">mdi-calendar-month-outline</v-icon>-->
<!--              {{ item.createTime | date }}-->
<!--              <span class="separator">|</span>-->
<!--              &lt;!&ndash; 文章分类 &ndash;&gt;-->
<!--              <router-link :to="'/categories/' + item.categoryId">-->
<!--                <v-icon size="14">mdi-inbox-full</v-icon>-->
<!--                {{ item.categoryName }}-->
<!--              </router-link>-->
<!--              <span class="separator">|</span>-->
<!--              &lt;!&ndash; 文章标签 &ndash;&gt;-->
<!--              <router-link-->
<!--                  style="display:inline-block"-->
<!--                  :to="'/tags/' + tag.id"-->
<!--                  class="mr-1"-->
<!--                  v-for="tag of item.tagDTOList"-->
<!--                  :key="tag.id"-->
<!--              >-->
<!--                <v-icon size="14">mdi-tag-multiple</v-icon>-->
<!--                {{ tag.tagName }}-->
<!--              </router-link>-->
<!--            </div>-->
<!--            &lt;!&ndash; 文章内容 &ndash;&gt;-->
<!--            <div class="article-content">-->
<!--              {{ item.articleContent }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-card>-->
<!--        &lt;!&ndash; 无限加载 &ndash;&gt;-->
<!--        <infinite-loading @infinite="infiniteHandler">-->
<!--          <div slot="no-more"/>-->
<!--        </infinite-loading>-->
<!--      </v-col>-->

<!--      &lt;!&ndash; 博主信息 &ndash;&gt;-->
<!--      <v-col md="3" cols="12" class="d-md-block d-none">-->
<!--        <div class="blog-wrapper">-->
<!--          <v-card class="animated zoomIn blog-card mt-5">-->
<!--&lt;!&ndash;            <div class="author-wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;              &lt;!&ndash; 博主头像 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;              <v-avatar size="110">&ndash;&gt;-->
<!--&lt;!&ndash;                <img class="author-avatar" :src="blogInfo.avatar"/>&ndash;&gt;-->
<!--&lt;!&ndash;              </v-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;              <div style="font-size: 1.375rem">{{ blogInfo.nickname }}</div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div style="font-size: 0.875rem;">{{ blogInfo.intro }}</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            &lt;!&ndash; 博客信息 &ndash;&gt;-->
<!--&lt;!&ndash;            <div class="blog-info-wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="blog-info-data">&ndash;&gt;-->
<!--&lt;!&ndash;                <router-link to="/archives">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="font-size: 0.875rem">文章</div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="font-size: 1.25rem">&ndash;&gt;-->
<!--&lt;!&ndash;                    {{ blogInfo.articleCount }}&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="blog-info-data">&ndash;&gt;-->
<!--&lt;!&ndash;                <router-link to="/categories">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="font-size: 0.875rem">分类</div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="font-size: 1.25rem">&ndash;&gt;-->
<!--&lt;!&ndash;                    {{ blogInfo.categoryCount }}&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="blog-info-data">&ndash;&gt;-->
<!--&lt;!&ndash;                <router-link to="/tags">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="font-size: 0.875rem">标签</div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="font-size: 1.25rem">{{ blogInfo.tagCount }}</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            &lt;!&ndash; 收藏按钮 &ndash;&gt;-->
<!--&lt;!&ndash;            <a class="collection-btn" @click="tip = true">&ndash;&gt;-->
<!--&lt;!&ndash;              <v-icon color="#fff" size="18" class="mr-1">mdi-bookmark</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;              加入书签&ndash;&gt;-->
<!--&lt;!&ndash;            </a>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="card-info-social">&ndash;&gt;-->
<!--&lt;!&ndash;              <a&ndash;&gt;-->
<!--&lt;!&ndash;                  class="mr-5 iconfont iconqq"&ndash;&gt;-->
<!--&lt;!&ndash;                  target="_blank"&ndash;&gt;-->
<!--&lt;!&ndash;                  href="http://wpa.qq.com/msgrd?v=3&uin=1192176811&site=qq&menu=yes"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;              <a&ndash;&gt;-->
<!--&lt;!&ndash;                  target="_blank"&ndash;&gt;-->
<!--&lt;!&ndash;                  href="https://github.com/X1192176811"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="mr-5 iconfont icongithub"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;              <a&ndash;&gt;-->
<!--&lt;!&ndash;                  target="_blank"&ndash;&gt;-->
<!--&lt;!&ndash;                  href="https://gitee.com/feng_meiyu"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="mr-5 iconfont icongitee-fill-round"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;              <a&ndash;&gt;-->
<!--&lt;!&ndash;                  class=" iconfont iconweibo"&ndash;&gt;-->
<!--&lt;!&ndash;                  target="_blank"&ndash;&gt;-->
<!--&lt;!&ndash;                  href="https://gitee.com/feng_meiyu"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </v-card>-->

<!--          &lt;!&ndash; 网站信息 &ndash;&gt;-->
<!--&lt;!&ndash;          <v-card class="blog-card animated zoomIn mt-5 big">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="web-info-title">&ndash;&gt;-->
<!--&lt;!&ndash;              <v-icon size="18">mdi-bell</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;              公告&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div style="font-size:0.875rem">&ndash;&gt;-->
<!--&lt;!&ndash;              {{ blogInfo.notice }}&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </v-card>&ndash;&gt;-->

<!--          &lt;!&ndash; 网站信息 &ndash;&gt;-->
<!--&lt;!&ndash;          <v-card class="blog-card animated zoomIn mt-5">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="web-info-title">&ndash;&gt;-->
<!--&lt;!&ndash;              <v-icon size="18">mdi-chart-line</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;              网站资讯&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="web-info">&ndash;&gt;-->
<!--&lt;!&ndash;              <div style="padding:4px 0 0">&ndash;&gt;-->
<!--&lt;!&ndash;                运行时间:<span class="float-right">{{ time }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div style="padding:4px 0 0">&ndash;&gt;-->
<!--&lt;!&ndash;                总访问量:<span class="float-right">&ndash;&gt;-->
<!--&lt;!&ndash;                  {{ blogInfo.viewsCount }}&ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </v-card>&ndash;&gt;-->
<!--        </div>-->
<!--      </v-col>-->
<!--    </v-row>-->

    <!-- 提示消息 -->
<!--    <v-snackbar v-model="tip" top color="#49b1f5" :timeout="2000">-->
<!--      按CTRL+D 键将本页加入书签-->
<!--    </v-snackbar>-->
  </div>


</template>

<script>
import EasyTyper from "easy-typer-js";

export default {
  name: "IndexDemo",
  data: function () {
    return {
      tip: false,
      time: "",
      obj: {
        output: "",
        isEnd: false,
        speed: 300,
        singleBack: false,
        sleep: 0,
        type: "rollback",
        backSpeed: 40,
        sentencePause: true
      },
      articleList: [],
      blogInfo: {},
      current: 1
    };
  },
  methods: {
    // 初始化
    init() {
      // 一言Api进行打字机循环输出效果
      fetch("https://v1.hitokoto.cn?c=i")
          .then(res => {
            return res.json();
          })
          .then(({hitokoto}) => {
            this.initTyped(hitokoto);
          });
    },
    initTyped(input, fn, hooks) {
      const obj = this.obj;
      // eslint-disable-next-line no-unused-vars
      const typed = new EasyTyper(obj, input, fn, hooks);
    },
    scrollDown() {
      window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight
      });
    },
    runTime() {
      var timeold =
          new Date().getTime() - new Date("December 12,2019").getTime();
      var msPerDay = 24 * 60 * 60 * 1000;
      var daysold = Math.floor(timeold / msPerDay);
      var str = "";
      var day = new Date();
      str += daysold + "天";
      str += day.getHours() + "时";
      str += day.getMinutes() + "分";
      str += day.getSeconds() + "秒";
      this.time = str;
    },
    getBlogInfo() {
      this.axios.get("/api/").then(({ data }) => {
        this.blogInfo = data.data;
        this.$store.commit("checkBlogInfo", data.data);
      });
    },
    infiniteHandler($state) {
      this.axios
          .get("/api/articles", {
            params: {
              current: this.current
            }
          })
          .then(({ data }) => {
            if (data.data.length) {
              this.articleList.push(...data.data);
              this.current++;
              $state.loaded();
            } else {
              $state.complete();
            }
          });
    }
  },
  computed: {
    isRight() {
      return function(index) {
        if (index % 2 == 0) {
          return "article-cover left-radius";
        }
        return "article-cover right-radius";
      };
    }
  }
}
</script>

<style scoped>
.home-banner {
  position: absolute;
  top: -58px;
  left: 0;
  right: 0;
  height: 100vh;
  /*background控制背景图*/
  background: url("https://www.static.talkxj.com/ymwmek.jpg") center center /
    cover no-repeat;
  background-color: #49b1f5;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;
}
.banner-container {
  margin-top: 43vh;
  line-height: 1.5;
  color: #eee;
}
.blog-contact a {
  color: #fff !important;
}
.card-info-social {
  line-height: 40px;
  text-align: center;
  font-size: 1.5rem;
  margin: 6px 0 -6px;
}
.left-radius {
  border-radius: 8px 0 0 8px !important;
  order: 0;
}
.right-radius {
  border-radius: 0 8px 8px 0 !important;
  order: 1;
}
.article-wrapper {
  font-size: 14px;
}
@media (min-width: 760px) {
  .blog-title {
    font-size: 2.5rem;
  }
  .blog-intro {
    font-size: 1.5rem;
  }
  .blog-contact {
    display: none;
  }
  .home-container {
    max-width: 1200px;
    margin: calc(100vh - 50px) auto 0 auto;
    padding: 0 3px;
  }
  .article-card {
    display: flex;
    align-items: center;
    height: 280px;
    width: 100%;
    margin-top: 20px;
  }
  .article-cover {
    overflow: hidden;
    height: 100%;
    width: 45%;
  }
  .on-hover {
    transition: all 0.6s;
  }
  .article-card:hover .on-hover {
    transform: scale(1.1);
  }
  .article-wrapper {
    padding: 0 2.5rem;
    width: 55%;
  }
  .article-wrapper a {
    font-size: 1.5rem;
    transition: all 0.3s;
  }
}
@media (max-width: 759px) {
  .blog-title {
    font-size: 26px;
  }
  .blog-contact {
    font-size: 1.25rem;
    line-height: 2;
  }
  .home-container {
    width: 100%;
    margin: calc(100vh - 66px) auto 0 auto;
  }
  .article-card {
    margin-top: 1rem;
  }
  .article-cover {
    border-radius: 8px 8px 0 0 !important;
    height: 230px !important;
    width: 100%;
  }
  .article-cover div {
    border-radius: 8px 8px 0 0 !important;
  }
  .article-wrapper {
    padding: 1.25rem 1.25rem 1.875rem;
  }
  .article-wrapper a {
    font-size: 1.25rem;
    transition: all 0.3s;
  }
}
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.scroll-down i {
  font-size: 2rem;
}
.article-wrapper a:hover {
  color: #8e8cd8;
}
.article-info {
  font-size: 95%;
  color: #858585;
  line-height: 2;
  margin: 0.375rem 0;
}
.article-info a {
  font-size: 95%;
  color: #858585 !important;
}
.article-content {
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.blog-wrapper {
  position: sticky;
  top: 10px;
}
.blog-card {
  line-height: 2;
  padding: 1.25rem 1.5rem;
}
.author-wrapper {
  text-align: center;
}
.blog-info-wrapper {
  display: flex;
  justify-self: center;
  padding: 0.875rem 0;
}
.blog-info-data {
  flex: 1;
  text-align: center;
}
.blog-info-data a {
  text-decoration: none;
}
.collection-btn {
  text-align: center;
  z-index: 1;
  font-size: 14px;
  position: relative;
  display: block;
  background-color: #49b1f5;
  color: #fff !important;
  height: 32px;
  line-height: 32px;
  transition-duration: 1s;
  transition-property: color;
}
.collection-btn:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #ff7242;
  content: "";
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  transition-property: transform;
  transform: scaleX(0);
  transform-origin: 0 50%;
}
.collection-btn:hover:before {
  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  transform: scaleX(1);
}
.author-avatar {
  transition: all 0.5s;
}
.author-avatar:hover {
  transform: rotate(360deg);
}
.web-info {
  padding: 0.25rem;
  font-size: 0.875rem;
}
.scroll-down-effects {
  color: #eee !important;
  text-align: center;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  line-height: 1.5;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  animation: scroll-down-effect 1.5s infinite;
}
@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
  50% {
    top: -16px;
    opacity: 1;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
}
.big i {
  color: #f00;
  animation: big 0.8s linear infinite;
}
@keyframes big {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>