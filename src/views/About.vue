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

<!--          <div class="about-content">-->
<!--            <strong>个人简介：</strong>-->
<!--            <div>-->
<!--            在读大二，新能源专业-->
<!--            </div>-->
<!--            <div>-->
<!--              项目为前端Vue与后端springboot结合，用作自己对springboot的理解~-->
<!--            </div>-->
<!--          </div>-->




        <article v-html="content"></article>



        </v-card-text>
      </v-card>

    </v-col>

    <v-spacer></v-spacer>
  </v-row>



</div>

</template>

<script>

export default {
  name: "AboutMe",

  data(){
    return {
      content: "",
    }
  },
  methods:{
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
      this.content = article;
      // 将markdown替换为html标签
      // article.articleContent = md.render(article.articleContent);
      // this.article = article;
    }
  },
  beforeMount() {
    this.$axios.get("/api/about/get").then(({data}) => {
      this.content = data.data;
      this.markdownToHtml(this.content);
    })
  }

}
</script>

<style scoped>
.about-content{
  padding-left: 10%;
  padding-right: 10%;
}
.about-content {
  word-break: break-word;
  line-height: 1.8;
  font-size: 14px;
}
.my-wrapper {
  text-align: center;
}
.author-avatar {
  transition: all 0.5s;
}
.author-avatar:hover {
  transform: rotate(360deg);
}
</style>