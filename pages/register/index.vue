<template>
  <div class="wrap-authentication">
    <div class="login-pic register-pic">
      <div class="select-image" v-for="item in avatars" :key="item.id">
        <label :for="'avt_' + item.id"
          ><img :src="item.image" :alt="'avt' + item.id"
        /></label>
        <input
          v-model="userData.image"
          :id="'avt_' + item.id"
          :value="item.image"
          name="gender"
          type="radio"
        />
      </div>
    </div>
    <div class="auth-form">
      <h3>Member Register</h3>
      <div class="form-authentication needs-validation" novalidate>
        <div class="form-group">
          <input
            v-model="userData.name"
            type="text"
            class="form-control"
            placeholder=" "
            required
          />
          <label class="form-label">Full name</label>
          <div class="invalid-feedback valid-custom">
            Please enter your name.
          </div>
        </div>
        <div class="form-group">
          <input
            v-model="userData.email"
            type="email"
            class="form-control"
            placeholder=" "
            required
          />
          <label class="form-label">Email</label>
          <div class="invalid-feedback valid-custom">
            Please enter your email.
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder=" "
            required
            v-model="userData.password"
          />
          <label class="form-label">Password</label>
          <div class="invalid-feedback valid-custom">
            Please enter your password.
          </div>
        </div>
        <div class="form-group">
          <button
            @click="register"
            class="btn btn-primary"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
      <nuxt-link to="/login">
        <p class="navigate-register text-center">
          Login <b-icon icon="arrow-right"></b-icon>
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
        image: "img-login-02.jpg",
        name: "",
        email: "",
        password: "",
      },
      avatars: [
        {
          id: 1,
          image: "img-login-02.jpg",
        },
        {
          id: 2,
          image: "img-login-03.jpg",
        },
      ],
    };
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {
    register() {
      this.$store
        .dispatch("admin/addUser", this.userData)
        .then((res) => {
          this.$toast.success("Account has been successfully registered");
        })
        .catch((res) => {
          this.$toast.error("Account registration failed");
        });
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.wrap-authentication .register-pic {
  max-width: 300px;
}

.wrap-authentication .register-pic .select-image {
  margin: 20px;
  position: relative;
}

.wrap-authentication .register-pic .select-image input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;
  position: absolute;
  right: -15px;
  top: 0;
}

.wrap-authentication .register-pic .select-image input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em;
}

.wrap-authentication
  .register-pic
  .select-image
  input[type="radio"]:checked::before {
  transform: scale(1);
}

.wrap-authentication .register-pic .select-image input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}

.wrap-authentication .register-pic .select-image img {
  border-radius: 35px;
  cursor: pointer;
}
</style>