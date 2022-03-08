<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/user">Back to list</nuxt-link>
      <h4>Add new User</h4>
    </div>
    <hr />
    <form class="needs-validation" style="padding: 20px 0" novalidate>
      <div class="form-group">
        <input
          v-model="userData.name"
          type="text"
          class="form-control"
          placeholder=" "
          required
        />
        <label for="" class="form-label">Name</label>
        <div class="invalid-feedback">Please choose a username.</div>
      </div>

      <div class="form-group">
        <input
          v-model="userData.email"
          type="email"
          class="form-control"
          placeholder=" "
          required
        />
        <label for="" class="form-label">Email</label>
        <div class="invalid-feedback">Please choose a email.</div>
      </div>

      <div class="form-group">
        <input
          v-model="userData.password"
          type="password"
          class="form-control"
          placeholder=" "
          required
        />
        <label for="" class="form-label">Password</label>
        <div class="invalid-feedback">Please choose a password.</div>
      </div>

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/user">
            <button
              @click="updateUser"
              type="submit"
              v-if="this.id"
              class="btn"
            >
              Save
            </button>
            <button @click="addUser" type="submit" v-if="!this.id" class="btn">
              Add
            </button>
          </nuxt-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      userData: {
        id: 0,
        name: "",
        image: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {},
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      if (this.id) {
        this.$store.dispatch("admin/getDetailUser", this.id).then((res) => {
          this.userData = { ...res };
        });
      } else {
        this.userData = {};
      }
    },
    addUser() {
      this.$store.dispatch("admin/addUser", this.userData).then(res => {
        this.$toast.success("Add Success")
      }).catch(res => {
        this.$toast.error('Add Failed')
      })
    },
    updateUser() {
      this.$store.dispatch("admin/updateUser", this.userData).then(res => {
        this.$toast.success("Update Success")
      }).catch(res => {
        this.$toast.error('Update Failed')
      });
    },
  },
};
</script>

<style>
</style>