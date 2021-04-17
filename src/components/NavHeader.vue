<template>
  <div >
    <!--    </Menu>-->
<!--    <v-app-bar color="yellow" hide-on-scroll class="menu">-->
<!--    <v-app-bar hide-on-scroll height="26" color="transparent" flat>-->
    <v-app-bar hide-on-scroll height="58" color="transparent" class="nav-bar">
<!--    <v-app-bar height="58" color="transparent" class="nav-bar">-->

      <v-toolbar-title>
        <router-link to="/" class="menu-item" style="color: #616161">
          QYS
        </router-link>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain small class="menu-items" @click="setSearchFlagTrue">
        <div>
          <v-icon>mdi-text-box-search</v-icon>
        </div>
        <div style="color: #7D837F">
          搜索
        </div>
      </v-btn>
      <v-btn plain small class="menu-items">
        <div>
          <v-icon>mdi-home</v-icon>
        </div>
        <router-link to="/" class="menu-item" style="color: #7D837F">
          首页
        </router-link>
      </v-btn>
      <v-btn plain small class="menu-items">
        <div>
          <v-icon>mdi-text-box</v-icon>
        </div>
        <router-link to="/archives" class="menu-item" style="color: #7D837F">
          时间戳
        </router-link>
      </v-btn>
      <v-btn plain small class="menu-items">
        <div>
          <v-icon>mdi-book-open-page-variant</v-icon>
        </div>
        <router-link to="/categories" class="menu-item" style="color: #7D837F">
          分类
        </router-link>
      </v-btn>
<!--      <v-btn plain small class="menu-items">-->
<!--        <div>-->
<!--          <v-icon>mdi-tag-multiple</v-icon>-->
<!--        </div>-->
<!--        <router-link to="/tags" class="menu-item" style="color: #7D837F">-->
<!--          标签-->
<!--        </router-link>-->
<!--      </v-btn>-->
      <v-btn plain small class="menu-items">
        <div>
          <v-icon>mdi-information</v-icon>
        </div>
        <router-link to="/about" class="menu-item" style="color: #7D837F">
          关于
        </router-link>
      </v-btn>
      <v-btn plain small class="menu-items" @click="setLoginFlagTrue">
        <div>
          <v-icon>mdi-account</v-icon>
        </div>
        <div style="color: #7D837F">
          登录
        </div>
      </v-btn>
    </v-app-bar>
  </div>

</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "NavHeader",
  data() {
    return {
    }
  },
  methods: {
    checkState:function () {
      console.log(this.$store.state.searchFlag);
    },
    // openSearch: function () {
    //   alert("Search")
    // },
    ...mapMutations(['setSearchFlagTrue','setLoginFlagTrue'])
  }
}
</script>


<style scoped>

/*控制menu下方是否显示线条，屏蔽即可显示线条*/
/*.ivu-menu-light:after {*/
/*   height: 0px !important;*/
/* }*/

/*.menu{*/
/*  height: 16px;*/
/*}*/

.menu-item{
  color: black;
}





</style>