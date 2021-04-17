<template>
  <v-row justify="center">
    <v-dialog
        v-model="loginFlag"
        persistent
        max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
<!--        <v-btn-->
<!--            color="primary"-->
<!--            dark-->
<!--            v-bind="attrs"-->
<!--            v-on="on"-->
<!--        >-->
<!--          Open Dialog-->
<!--        </v-btn>-->
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">后台登录</span>
          <v-spacer></v-spacer>
          <v-icon class="float-right" @click="setLoginFlagFalse">
            mdi-close
          </v-icon>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="4"-->
<!--              >-->
<!--                <v-text-field-->
<!--                    label="Legal first name*"-->
<!--                    required-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="4"-->
<!--              >-->
<!--                <v-text-field-->
<!--                    label="Legal middle name"-->
<!--                    hint="example of helper text only on focus"-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="4"-->
<!--              >-->
<!--                <v-text-field-->
<!--                    label="Legal last name*"-->
<!--                    hint="example of persistent helper text"-->
<!--                    persistent-hint-->
<!--                    required-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
              <v-col cols="12">
                <v-text-field
                    label="用户名:"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="密码:"
                    type="password"
                    required
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="null"
          >
            注册
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="null"
          >
            登录
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      show: false,
      dialog: false
    };
  },
  computed: {
    loginFlag: {
      set(value) {
        this.$store.state.loginFlag = value;
      },
      get() {
        return this.$store.state.loginFlag;
      }
    },

  },
  methods: {

    ...mapMutations(['setLoginFlagFalse'])

  }
}
</script>

<style scoped>

</style>