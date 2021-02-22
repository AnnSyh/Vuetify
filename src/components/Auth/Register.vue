<template>
  <v-container fluid fill-height>
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm6 md6>
        <v-card class="elevation-12">
          <v-toolbar
            color="deep-purple"
            dark
          >
            <v-toolbar-title>Register form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Введите ваш e-mail"
                type="email"
                required
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Введите ваш пароль"
                type="password"
                required
                v-model="password"
                :counter="6"
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="repeat"
                name="confirm-password"
                label="Повторите пароль"
                type="password"
                required
                v-model="confirmPassword"
                :counter="6"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="deep-purple"
              dark
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid || loading"
            >
              <!--              color="primary"-->
              Create Account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: false,

    email: '',
    password: '',
    confirmPassword: '',

    emailRules: [
      v => !!v || 'Введите email',
      v => /.+@.+/.test(v) || 'E-mail должен содержать @',
    ],


    passwordRules: [
      v => !!v || 'Пароль отсутстует',

      v => v.length >= 6 || 'Пароль должен содержать не менее 6 символов',
    ],

    confirmPasswordRules: [
      v => !!v || 'Пароль отсутстует',
      // v => v === this.password || 'Password should match'
    ],


  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit() {
      if(this.$refs.form.validate()){
        const user = {
          email: this.email,
          password: this.password,
        }

        // console.log('user = ',user)
        this.$store.dispatch('registerUser', user)
        .then(()=>{
          this.$router.push('/')

        })
        .catch(err => console.log(err))
      }
    }
  }
}
</script>
