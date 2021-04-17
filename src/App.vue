<template>
<!--  <router-view></router-view>-->
  <v-app >
    <v-main>
      <NavHeader></NavHeader>
<!--      只渲染router-view里面的内容-->

        <router-view></router-view>


      <Search></Search>
      <Login></Login>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>

import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import TopNavBarDemo from "@/demo/TopNavBarDemo";
import Index from "@/components/Index"
import Search from "@/components/Search";
import Login from "@/components/Login"
export default {
  name: 'App',

  components: {
    Login,
    NavHeader,
    Footer,
    TopNavBarDemo,
    Index,
    Search
  },

  data: () => ({
    //
  }),
};
</script>
