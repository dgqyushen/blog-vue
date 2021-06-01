<template>
<!--    <div>-->
<!--    <v-row justify="center" >-->
<!--      <v-dialog-->
<!--          v-model="dialog"-->
<!--          scrollable-->
<!--          max-width="300px"-->
<!--      >-->
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--              color="primary"-->
<!--              dark-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--          >-->
<!--            Open Dialog-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <v-card>-->
<!--          <v-card-title>Select Country</v-card-title>-->
<!--          <v-divider></v-divider>-->
<!--          <v-card-text style="height: 300px;">-->
<!--            <v-radio-group-->
<!--                v-model="dialogm1"-->
<!--                column-->
<!--            >-->
<!--              <v-radio-->
<!--                  label="Bahamas, The"-->
<!--                  value="bahamas"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Bahrain"-->
<!--                  value="bahrain"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Bangladesh"-->
<!--                  value="bangladesh"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Barbados"-->
<!--                  value="barbados"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Belarus"-->
<!--                  value="belarus"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Belgium"-->
<!--                  value="belgium"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Belize"-->
<!--                  value="belize"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Benin"-->
<!--                  value="benin"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Bhutan"-->
<!--                  value="bhutan"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Bolivia"-->
<!--                  value="bolivia"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Bosnia and Herzegovina"-->
<!--                  value="bosnia"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Botswana"-->
<!--                  value="botswana"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Brazil"-->
<!--                  value="brazil"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Brunei"-->
<!--                  value="brunei"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Bulgaria"-->
<!--                  value="bulgaria"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Burkina Faso"-->
<!--                  value="burkina"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Burma"-->
<!--                  value="burma"-->
<!--              ></v-radio>-->
<!--              <v-radio-->
<!--                  label="Burundi"-->
<!--                  value="burundi"-->
<!--              ></v-radio>-->
<!--            </v-radio-group>-->
<!--          </v-card-text>-->
<!--          <v-divider></v-divider>-->
<!--          <v-card-actions>-->
<!--            <v-btn-->
<!--                color="blue darken-1"-->
<!--                text-->
<!--                @click="dialog = false"-->
<!--            >-->
<!--              Close-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--                color="blue darken-1"-->
<!--                text-->
<!--                @click="dialog = false"-->
<!--            >-->
<!--              Save-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </v-dialog>-->
<!--    </v-row>-->
<!--  </div>-->

<!--  <div>-->
<!--    <v-dialog transition="dialog-top-transition" max-width="600">-->
<!--      <template v-slot:activator="{ on, attrs }">-->

<!--        <v-btn-->
<!--            color="primary"-->
<!--            v-bind="attrs"-->
<!--            v-on="on"-->
<!--        >From the top</v-btn>-->

<!--      </template>-->

<!--      <template v-slot:default="dialog">-->
<!--        <v-card>-->
<!--          <v-toolbar-->
<!--              color="primary"-->
<!--              dark-->
<!--          >Opening from the top</v-toolbar>-->
<!--          <v-card-text>-->
<!--            <div class="text-h2 pa-12">Hello world!</div>-->
<!--          </v-card-text>-->
<!--          <v-card-actions class="justify-end">-->
<!--            <v-btn-->
<!--                text-->
<!--                @click="dialog.value = false"-->
<!--            >Close</v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </template>-->

<!--    </v-dialog>-->
<!--  </div>-->

  <!-- 搜索框 -->
  <v-dialog v-model="searchFlag" max-width="600" :fullscreen="isMobile">

    <v-card class="search-wrapper" style="border-radius:4px">
      <div class="mb-3">
        <span class="search-title">本地搜索</span>
        <!-- 关闭按钮 -->
<!--        <v-icon class="float-right" @click="searchFlag = false">-->
        <v-icon class="float-right" @click="setSearchFlagFalse">
          mdi-close
        </v-icon>
      </div>
      <!-- 输入框 -->
      <div class="search-input-wrapper">
        <v-icon>mdi-magnify</v-icon>
<!--        <input v-model="keywords" placeholder="输入文章标题或内容..." />-->
        <input v-model="keywords" placeholder="输入文章内容..." />
      </div>
      <!-- 搜索结果 -->
      <div class="search-result-wrapper">
        <hr class="divider" />
        <ul>
          <li class="search-reslut" v-for="item of articleList" :key="item.id">
            <!-- 文章标题 -->
            <a @click="goTo(item.blogId)" v-html="item.blogTitle" style="text-decoration: none;"/>
            <!-- 文章内容 -->
            <p
                class="search-reslut-content text-justify"
                v-html="item.blogContent"
            />
          </li>
        </ul>
        <!-- 搜索结果不存在提示 -->
        <div
            v-show="flag && articleList.length == 0"
            style="font-size:0.875rem"
        >
          找不到您查询的内容：{{ keywords }}
        </div>
      </div>
    </v-card>

  </v-dialog>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "Search",
  data: function () {
    return {
      keywords: "",
      articleList: [],
      flag: false
    }
  },
  computed: {
    searchFlag: {
      set(value) {
        this.$store.state.searchFlag = value;
      },
      get() {
        return this.$store.state.searchFlag;
      }
    },
    isMobile() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth > 960) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapMutations(['setSearchFlagFalse']),
    goTo:function (id) {
      // console.log(id);
      this.$router.push({
        path:'/articles/'+id
      })
    }
  },
  watch: {
    keywords(value) {
      this.flag = value.trim() != "" ? true : false;
      let that = this;
      this.$axios.get("/api/blog/searchContent",{
        params: {
          content: value
        }
      }).then(function (response) {

        that.articleList = response.data
      })
    }
  }
}
</script>

<style scoped>
.search-wrapper {
  padding: 1.25rem;
  height: 100%;
}
.search-title {
  color: #49b1f5;
  font-size: 1.25rem;
  line-height: 1;
}
.search-input-wrapper {
  display: flex;
  padding: 5px;
  height: 35px;
  width: 100%;
  border: 2px solid #8e8cd8;
  border-radius: 2rem;
}
.search-input-wrapper input {
  width: 100%;
  margin-left: 5px;
  outline: none;
}
@media (min-width: 960px) {
  .search-result-wrapper {
    padding-right: 5px;
    height: 450px;
    overflow: auto;
  }
}
@media (max-width: 959px) {
  .search-result-wrapper {
    height: calc(100vh - 110px);
    overflow: auto;
  }
}
.search-reslut a {
  color: #555;
  font-weight: bold;
  border-bottom: 1px solid #999;
  text-decoration: none;
}
.search-reslut-content {
  color: #555;
  cursor: pointer;
  border-bottom: 1px dashed #ccc;
  padding: 5px 0;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.divider {
  margin: 20px 0;
  border: 2px dashed #d2ebfd;
}


</style>