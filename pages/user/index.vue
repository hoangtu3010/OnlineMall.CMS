<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Users</h2>
      <nuxt-link to="/user/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>User Name</th>
          <th>Email</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.email }}</td>
          <td class="text-center">
            <nuxt-link :to="`/user/${e.id}`" class="button-action btn-edit">
              <i class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/user" class="button-action btn-delete">
              <i @click="removeUser(e.id)" class="fas fa-trash"></i>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.getData();
  },
  computed: {
    listData() {
      return this.$store.state.admin.listUser;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("admin/getListUser");
    },
    removeUser(id) {
      this.$store
        .dispatch("admin/removeUser", id)
        .then((res) => {
          this.getData()
          this.$toast.success("Delete Success");
        })
        .catch((res) => {
          this.$toast.error("Delete Failed");
        });
      
    },
  },
};
</script>

<style>
</style>