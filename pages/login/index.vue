<template>
  <div class="wrap-authentication">
    <div class="login-pic">
      <img src="~/assets/images/img-login-01.png" alt="login image" />
    </div>
    <div class="auth-form">
      <h3>Member Login</h3>
      <div class="form-authentication">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder=" "
            v-model="userData.email"
            required
          />
          <label class="form-label">Email</label>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder=" "
            v-model="userData.password"
            required
          />
          <label class="form-label">Password</label>
        </div>
        <div class="form-group">
          <button @click="login" class="btn btn-primary">Login</button>
        </div>
      </div>
      <nuxt-link to="/register">
        <p class="navigate-register text-center">
          Create your account <b-icon icon="arrow-right"></b-icon>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: "authentication",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.userData,
        });
        console.log(response, 'response');
      } catch (err) {
        console.log(err, "error");
      }
    },
  },
};
</script>

<style scoped>
</style>