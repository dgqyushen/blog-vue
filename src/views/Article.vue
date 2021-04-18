<template>
  <div>
    <!--    <CopyRights></CopyRights>-->
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6">

        <v-card style="margin-top: 30px; padding-right: 30px; padding-left: 30px;">

          <div class="article-title">
            {{blogTitle}}
          </div>
<!--          <hr>-->
          <v-card-subtitle class="subtitle">
            <span>
              <i class="iconfont iconrili"/>
              发表于{{ blogCreated }}
            </span>
            <span class="separator">|</span>
            <span>
              <i class="iconfont icongengxinshijian"/>
              更新于{{ blogModified }}
            </span>
            <!--            <span class="separator">|</span>-->
            <!--            <span>-->
            <!--              <i class="iconfont icongengxinshijian" />-->
            <!--              更新于{{blogModified}}-->
            <!--            </span>-->
            <!--            文章分类-->
            <div>
              <span>
              <i class="iconfont iconzishu"/>
              字数统计: {{ blogLength }}
              </span>
              <span class="separator">|</span>
              <span>
              <i class="iconfont iconshijian"/>
              阅读时长: {{ readTime }}
            </span>
            </div>

          </v-card-subtitle>

          <!--          <v-card-text v-html="markdownToHtml">-->

          <!--          </v-card-text>-->
<!--          <article v-html="markdownToHtml" class="article-content markdown-body">-->

<!--          </article>-->
          <article
              id="write"
              class="article-content markdown-body"
              v-html="blogContent"
              ref="article"
          />

          <div>
            <span class="tags" v-for="item in categoriesList" :key="item.id">
              {{item.name}}
            </span>
<!--            <span>-->
<!--              222222-->
<!--            </span>-->
          </div>

          <div class="aritcle-copyright">
            <div>
              <span>文章作者：</span>
              <a href="http://localhost:8080" target="_blank"> {{ blogAuthor }}</a>
            </div>
            <div>
              <span>文章链接：</span>
              <a :href="articleHref" target="_blank">{{ articleHref }} </a>
            </div>
            <div>
              <span>版权声明：</span>本博客所有文章除特别声明外，均采用
              <a
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  target="_blank"
              >
                CC BY-NC-SA 4.0
              </a>
              许可协议。转载请注明文章出处。
            </div>
          </div>



<!--          <div class="article-reward">-->
<!--            &lt;!&ndash; 点赞按钮 &ndash;&gt;-->
<!--            <a :class="isLike" @click="like">-->
<!--              <v-icon size="14" color="#fff">mdi-thumb-up</v-icon> 点赞-->
<!--              <span v-show="article.likeCount > 0">{{ article.likeCount }}</span>-->
<!--            </a>-->
<!--            -->
<!--            <a class="reward-btn">-->
<!--              &lt;!&ndash; 打赏按钮 &ndash;&gt;-->
<!--              <i class="iconfont iconerweima" /> 打赏-->
<!--              &lt;!&ndash; 二维码 &ndash;&gt;-->
<!--              <div class="animated fadeInDown reward-main">-->
<!--                <ul class="reward-all">-->
<!--                  <li class="reward-item">-->
<!--                    <img-->
<!--                        class="reward-img"-->
<!--                        :src="require('../assets/img/wechat.jpg')"-->
<!--                    />-->
<!--                    <div class="reward-desc">微信</div>-->
<!--                  </li>-->
<!--                  <li class="reward-item">-->
<!--                    <img-->
<!--                        class="reward-img"-->
<!--                        :src="require('../assets/img/alipay.jpg')"-->
<!--                    />-->
<!--                    <div class="reward-desc">支付宝</div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </a>-->
<!--          </div>-->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  @click="like" :color="isLike" width="10%">
              <div style="width: 95%">
                <v-icon size="14" color="#fff" style="margin-right: 5px">
                  mdi-thumb-up
                </v-icon><a style="color: white">点赞 {{likeNum}}</a>
              </div>

            </v-btn>

<!--            <div style="width: 2%"></div>-->

<!--            <v-btn color="#49B1F5" width="10%">-->
<!--              <i class="iconfont iconerweima" style="margin-right: 5px; color: white"/>-->
<!--              <a style="color: white">打赏</a>-->
<!--              <div class="animated fadeInDown reward-main">-->
<!--                <ul class="reward-all">-->
<!--                  <li class="reward-item">-->
<!--                    <img-->
<!--                        class="reward-img"-->
<!--                        :src="require('../assets/img/wechat.jpg')"-->
<!--                    />-->
<!--                    <div class="reward-desc">微信</div>-->
<!--                  </li>-->
<!--                  <li class="reward-item">-->
<!--                    <img-->
<!--                        class="reward-img"-->
<!--                        :src="require('../assets/img/alipay.jpg')"-->
<!--                    />-->
<!--                    <div class="reward-desc">支付宝</div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </v-btn>-->
            <v-spacer></v-spacer>



          </v-card-actions>

          <hr style="margin-top: 5px">

          <Comment :blogId="id"></Comment>

          <v-card-actions></v-card-actions>
        </v-card>


      </v-col>
      <!--      信息框-->
      <v-col cols="12" md="2">
        <v-card style="margin-top: 30px; padding-left: 5%" >
          <div class="right-title">
            <i class="iconfont iconhanbao" style="font-size:16.8px" />
            <span>目录</span>
          </div>
          <div id="toc">
          </div>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>


  </div>
</template>

<script>
import Comment from "@/components/Comment";
import Clipboard from "clipboard";
import 'highlight.js/styles/googlecode.css';
import {mapMutations} from 'vuex'
import tocbot from 'tocbot'

export default {
  name: "Article",
  data: function () {
    return {
      id: '',
      blogAuthor: '',
      blogContent: '',
      blogCreated: '',
      blogTitle: '',
      blogModified: '',
      blogImage: '',
      blogLength: '',
      articleHref: window.location.href,
      //likeNum后期从后端的redis数据库获取
      likeNum: '',
      likeFlag: false,
      clipboard: null,
      categoriesList:'',

    }
  },
  components:{
    Comment
  },
  computed: {
    // markdownToHtml() {
    //   // const MarkdownIt = new MarkdownIt();
    //   const hljs = require("highlight.js")
    //   // const result = md.render(this.blogContent);
    //   // return result;
    //   const md = new MarkdownIt({
    //     html: true,
    //     linkify: true,
    //     typographer: true,
    //     highlight: function (str, lang) {
    //       // 当前时间加随机数生成唯一的id标识
    //       const codeIndex = parseInt(Date.now());
    //       // 复制功能主要使用的是 clipboard.js
    //       let html = `<button class="copy-btn iconfont iconfuzhi" type="button" data-clipboard-action="copy" data-clipboard-target="#copy${codeIndex}"></button>`;
    //       const linesLength = str.split(/\n/).length - 1;
    //       // 生成行号
    //       let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
    //       for (let index = 0; index < linesLength; index++) {
    //         linesNum = linesNum + "<span></span>";
    //       }
    //       linesNum += "</span>";
    //       if (lang && hljs.getLanguage(lang)) {
    //         // highlight.js 高亮代码
    //         const preCode = hljs.highlight(lang, str, true).value;
    //         html = html + preCode;
    //         if (linesLength) {
    //           html += '<b class="name">' + lang + "</b>";
    //         }
    //         // 将代码包裹在 textarea 中，由于防止textarea渲染出现问题，这里将 "<" 用 "<" 代替，不影响复制功能
    //         return `<pre class="hljs code"><code>${html}</code>${linesNum}</pre><textarea style="position: absolute;top: -9999px;left: -9999px;z-index: -9999;" id="copy${codeIndex}">${str.replace(
    //             /<\/textarea>/g,
    //             "</textarea>"
    //         )}</textarea>`;
    //       }
    //     }
    //   });
    //   return md.render(this.blogContent);
    // },
    readTime() {
      const readtime = Math.ceil(this.blogLength / 400);
      return readtime + "分钟"
    },
    isLike() {
      if (this.likeFlag){
        return"orange";
      }
      return "blue"
    }
  },
  methods: {
    ...mapMutations(['setSearchFlagFalse']),
    like: function () {
      if (this.likeFlag!==true){
        this.likeNum++;
        this.likeFlag = true;
        let url = "/api/likeNum/"+this.id;
        this.$axios.post(url);
      }else {
        this.likeNum--;
        this.likeFlag = false;
        let url = "/api/likeNum/"+this.id;
        this.$axios.delete(url);
      }

    },
    getArticle: function () {
      const that = this;
      this.$axios.get("/api/blog/getOneById",{
          params: {
            id: that.id
          }
      }).then(({data})=>{
        // console.log(data.data.blog);
        document.title = data.data.blog.blogTitle;
        //   that.blogAuthor = response.data.data.blog.blogAuthor;
        //   that.blogContent = response.data.data.blog.blogContent;
           that.blogCreated = data.data.blog.blogCreated;
        //   that.blogImage = response.data.data.blog.blogImage;
           that.blogModified = data.data.blog.blogModified;
          that.blogTitle = data.data.blog.blogTitle;
           that.blogLength = data.data.blogLength;
           // console.log(data.data.blogLength);
        this.markdownToHtml(data.data.blog.blogContent);
        this.$nextTick(()=>{
          this.clipboard = new Clipboard(".copy-btn");
          this.clipboard.on("success",()=>{
            // this.$toast({ type: "success", message: "复制成功" });
            alert("复制成功");
          });
          let nodes = this.$refs.article.children;
          if (nodes.length) {
            for (let i = 0; i < nodes.length; i++) {
              let node = nodes[i];
              let reg = /^H[1-4]{1}$/;
              if (reg.exec(node.tagName)) {
                node.id = i;
              }
            }
          }
          tocbot.init({
            tocSelector: "#toc", //要把目录添加元素位置，支持选择器
            contentSelector: ".article-content", //获取html的元素
            headingSelector: "h1, h2, h3", //要显示的id的目录
            hasInnerContainers: true,
            onClick: function(e) {
              e.preventDefault();
            }
          });
        })
      })
    },
    markdownToHtml(article) {
      const MarkdownIt = require("markdown-it");
      const hljs = require("highlight.js");
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function(str, lang) {
          // 当前时间加随机数生成唯一的id标识
          var d = new Date().getTime();
          if (
              window.performance &&
              typeof window.performance.now === "function"
          ) {
            d += performance.now();
          }
          const codeIndex = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
              }
          );
          // 复制功能主要使用的是 clipboard.js
          let html = `<button class="copy-btn iconfont iconfuzhi" type="button" data-clipboard-action="copy" data-clipboard-target="#copy${codeIndex}"></button>`;
          const linesLength = str.split(/\n/).length - 1;
          // 生成行号
          let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
          for (let index = 0; index < linesLength; index++) {
            linesNum = linesNum + "<span></span>";
          }
          linesNum += "</span>";
          if (lang && hljs.getLanguage(lang)) {
            // highlight.js 高亮代码
            const preCode = hljs.highlight(lang, str, true).value;
            html = html + preCode;
            if (linesLength) {
              html += '<b class="name">' + lang + "</b>";
            }
            // 将代码包裹在 textarea 中，由于防止textarea渲染出现问题，这里将 "<" 用 "<" 代替，不影响复制功能
            return `<pre class="hljs"><code>${html}</code>${linesNum}</pre><textarea style="position: absolute;top: -9999px;left: -9999px;z-index: -9999;" id="copy${codeIndex}">${str.replace(
                /<\/textarea>/g,
                "</textarea>"
            )}</textarea>`;
          }
        }
      });
      article= md.render(article);
      this.blogContent = article;
      // 将markdown替换为html标签
      // article.articleContent = md.render(article.articleContent);
      // this.article = article;
    },
    getCategoriesByBlogId(){
      let that = this;
      this.$axios.get("/api/categories/getByBlogId",{
        params: {
          blogId: that.id
        }
      }).then(({data})=>{
        this.categoriesList = data.data;
      })
    },
    getLikeNum(){
      const that = this;
      this.$axios.get("/api/likeNum/get",{
        params: {
          blogId: that.id
        }
      }).then(({data})=>{
        // console.log(data);
        this.likeNum = data;
      })
    }
  },
  beforeMount() {
    if (this.$store.state.searchFlag==true){
      this.setSearchFlagFalse();
    }
    // this.id = this.$route.params.id;
    // let that = this;
    // this.$axios.get("http://localhost:8081/blog/getOneById", {
    //   params: {
    //     id: that.id
    //   }
    // }).then(function (response) {
    //   that.blogAuthor = response.data.data.blog.blogAuthor;
    //   that.blogContent = response.data.data.blog.blogContent;
    //   that.blogCreated = response.data.data.blog.blogCreated;
    //   that.blogImage = response.data.data.blog.blogImage;
    //   that.blogModified = response.data.data.blog.blogModified;
    //   that.blogTitle = response.data.data.blog.blogTitle;
    //   that.blogLength = response.data.data.blogLength;
    //   // console.log(response.data.data);
    //   // console.log(response.data.data.blog);
    // })
    this.getLikeNum();
  },
  destroyed() {
    this.clipboard.destroyed();
    tocbot.destroy();
  },
  created() {
    //路由跳转并赋予id值
    this.id = this.$route.params.id;
    // this.$axios.get("")
    this.getArticle();
    this.getCategoriesByBlogId();


    // console.log(this.blogTitle);
    // console.log(this.id);
  },
  // nextTick(callback, context) {
  //   this.clipboard = new Clipboard(".copy-btn");
  //   this.clipboard.on("success", () => {
  //     this.$toast({ type: "success", message: "复制成功" });
  //   });
  //   let nodes = this.$refs.article.children;
  //   if (nodes.length) {
  //     for (let i = 0; i < nodes.length; i++) {
  //       let node = nodes[i];
  //       let reg = /^H[1-4]{1}$/;
  //       if (reg.exec(node.tagName)) {
  //         node.id = i;
  //       }
  //     }
  //   }
  //   tocbot.init({
  //     tocSelector: "#toc", //要把目录添加元素位置，支持选择器
  //     contentSelector: ".article-content", //获取html的元素
  //     headingSelector: "h1, h2, h3", //要显示的id的目录
  //     hasInnerContainers: true,
  //     onClick: function(e) {
  //       e.preventDefault();
  //     }
  //   });
  // }
}
</script>

<style scoped>
.separator {
  margin-right: 3px;
}

.banner:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.article-info i {
  font-size: 14px;
}

.article-info {
  font-size: 14px;
  line-height: 1.75;
  display: inline-block;
}

.article-container:hover {
  box-shadow: 0 4px 12px 12px rgba(7, 17, 27, 0.15);
}

@media (min-width: 760px) {
  .banner {
    color: #eee !important;
  }

  .article-info span {
    font-size: 95%;
  }

  .article-info-container {
    position: absolute;
    bottom: 1.9rem;
    padding: 0 8%;
    width: 100%;
  }

  .second-line,
  .third-line {
    display: inline;
  }

  .article-title {
    font-size: 1.875rem;
    /*margin-bottom: 0.4rem;*/
    margin:0 auto

  }
}

@media (max-width: 759px) {
  .banner {
    color: #eee !important;
    height: 360px;
  }

  .article-info span {
    font-size: 90%;
  }

  .separator:first-child {
    display: none;
  }

  .blog-container {
    margin: 322px 5px 0 5px;
  }

  .article-info-container {
    position: absolute;
    bottom: 1.3rem;
    padding: 0 5%;
    width: 100%;
    color: #eee;
    text-align: left;
  }

  .article-title {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }
}

.article-content {
  word-break: break-word;
  font-size: 1rem;
  line-height: 1.8;
}

.article-operation {
  display: flex;
  align-items: center;
}

.article-category a {
  color: #fff !important;
}

.tag-container a {
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0 0.75rem;
  width: fit-content;
  border: 1px solid #49b1f5;
  border-radius: 1rem;
  color: #49b1f5 !important;
  font-size: 12px;
  line-height: 2;
}

.tag-container a:hover {
  color: #fff !important;
  background: #49b1f5;
  transition: all 0.5s;
}

.aritcle-copyright {
  position: relative;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 0.875rem;
  line-height: 2;
  padding: 0.625rem 1rem;
  border: 1px solid #eee;
}

.aritcle-copyright span {
  color: #49b1f5;
  font-weight: bold;
}

.aritcle-copyright a {
  text-decoration: underline !important;
  color: #99a9bf !important;
}

.aritcle-copyright:before {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: #49b1f5;
  content: "";
}

.aritcle-copyright:after {
  position: absolute;
  top: 0.95rem;
  right: 0.95rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5em;
  background: #fff;
  content: "";
}

.article-reward {
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reward-btn {
  position: relative;
  display: inline-block;
  width: 100px;
  background: #49b1f5;
  margin: 0 1rem;
  color: #fff !important;
  text-align: center;
  line-height: 36px;
  font-size: 0.875rem;
}

.reward-btn:hover .reward-main {
  display: block;
}

.reward-main {
  display: none;
  position: absolute;
  bottom: 40px;
  left: 0;
  margin: 0;
  padding: 0 0 15px;
  width: 100%;
}

.reward-all {
  display: inline-block;
  margin: 0 0 0 -110px;
  padding: 20px 10px 8px !important;
  width: 320px;
  border-radius: 4px;
  background: #f5f5f5;
}

.reward-all:before {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
}

.reward-all:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 2px;
  left: 0;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-top: 13px solid #f5f5f5;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
}

.reward-item {
  display: inline-block;
  padding: 0 8px;
  list-style-type: none;
}

.reward-img {
  width: 130px;
  height: 130px;
  display: block;
}

.reward-desc {
  margin: -5px 0;
  color: #858585;
  text-align: center;
}

.like-btn {
  /*background: blue;*/
  /*color: #FFFFFF;*/
  /*width: 10%;*/
}

.like-btn-active {
  display: inline-block;
  width: 100px;
  background: #ec7259;
  color: #fff !important;
  text-align: center;
  line-height: 36px;
  font-size: 0.875rem;
}

.tags{
  border-style: solid;
  border-color: #4ab1f4;
  border-radius: 10px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 1px;
  margin-right: 1px;
  color: #1F8CE3;

}

</style>

<style lang="scss">
pre.hljs {
  padding: 12px 2px 12px 40px !important;
  border-radius: 5px !important;
  position: relative;
  font-size: 14px !important;
  line-height: 22px !important;
  overflow: hidden !important;
  &:hover .copy-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  code {
    display: block !important;
    margin: 0 10px !important;
    overflow-x: auto !important;
    &::-webkit-scrollbar {
      z-index: 11;
      width: 6px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      width: 6px;
      background: #666;
    }
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-track {
      background: #1e1e1e;
    }
    &::-webkit-scrollbar-track-piece {
      background: #1e1e1e;
      width: 6px;
    }
  }
  .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 12px;
    bottom: 12px;
    left: 0;
    font-size: 100%;
    width: 40px;
    text-align: center;
    letter-spacing: -1px;
    border-right: 1px solid rgba(0, 0, 0, 0.66);
    user-select: none;
    counter-reset: linenumber;
    span {
      pointer-events: none;
      display: block;
      counter-increment: linenumber;
      &:before {
        content: counter(linenumber);
        color: #999;
        display: block;
        text-align: center;
      }
    }
  }
  b.name {
    position: absolute;
    top: 7px;
    right: 45px;
    z-index: 1;
    color: #999;
    pointer-events: none;
  }
  .copy-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    z-index: 1;
    color: #ccc;
    background-color: #525252;
    border-radius: 6px;
    display: none;
    font-size: 14px;
    width: 32px;
    height: 24px;
    outline: none;
  }
}
hr {
  height:1px;
  border:none;
  border-top:2px dashed #11b9e3 ;
}

</style>