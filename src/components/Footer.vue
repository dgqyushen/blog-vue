<template>
<!--  <v-footer app padless absolute style="background:rgba(0,0,0,0)">-->
<!--    <v-col class="text-center footer" cols="12">-->
<!--      <div>Copyright &copy; 2019-{{ new Date().getFullYear() }}</div>-->
<!--&lt;!&ndash;      <a href="http://www.beian.miit.gov.cn" target="_blank">&ndash;&gt;-->
<!--&lt;!&ndash;        湘ICP备19021924号</a&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--    </v-col>-->
<!--  </v-footer>-->
  <v-footer color="#2E5879" padless height="136" style="margin-top: 30px">
  <v-row justify="center" no-gutters>
<!--    <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>-->
    <v-col class="lighten-2 py-4 text-center white--text" cols="12">
      <strong>{{ new Date().getFullYear() }} </strong>— <strong>Powered By dgqyushen</strong>
      <div>
        <strong><a href="https://beian.miit.gov.cn/" style="color: white">粤ICP备2021088567号-1</a> | <img src="../assets/img/beian.png" alt="备案图标" style="height: 15px;"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002005636" style="color: white"> 粤公网安备44190002005636号</a></strong>
      </div>
    </v-col>


  </v-row>
  </v-footer>
</template>

<script>
export default {
name: "Footer",
  data: function () {
    return{

    }
  }
}
</script>

<style scoped>
.footer {
  font-size: 0.75rem;
}
.footer div {
  line-height: 1.75;
}
</style>