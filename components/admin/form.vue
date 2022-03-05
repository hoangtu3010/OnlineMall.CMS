<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Add new User</h4>
    </div>
    <hr />
    <div style="padding: 20px 0">
      <div class="form-group">
        <input
          v-model="data.name"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Name</label>
      </div>

      <div class="form-group">
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Email</label>
      </div>

      <div class="form-group">
        <input
          v-model="data.password"
          type="password"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Password</label>
      </div>

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/admin">
            <button @click="addOrUpdate" type="submit" class="btn">Add</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  ...mapActions("store/common", ["sCreate"]),
  props: {
    id: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      data: {
        id: 0,
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    console.log(this.id);
    this.getUserById(this.id);
  },
  methods: {
    addOrUpdate() {
      if (this.id === 0) {
        this.$axios
          .post(this.$api.USER_CREATE, {
            name: this.data.name,
            email: this.data.email,
            password: this.data.password,
          })
          .then((response) => {})
          .catch((e) => {});
      } else {
        this.$axios.put("/api/Users/PutUser/", this.id).then((response) => {});
      }
    },
    getUserById(id) {
      this.$axios.get("/api/Users/GetUser/" + id).then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
</style>