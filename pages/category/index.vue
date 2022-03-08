<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Category</h2>
      <nuxt-link to="/category/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td class="text-center">
            <nuxt-link :to="'/category/' + e.id" class="button-action btn-edit">
              <i class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/category" class="button-action btn-details">
              <i class="fas fa-eye"></i>
            </nuxt-link>
            <nuxt-link to="/category" class="button-action btn-delete">
              <i @click="removeCategories(e.id)" class="fas fa-trash"></i>
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
  created() {
    this.getData();
  },
  computed: {
    listData() {
      return this.$store.state.category.listCategories;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("category/getListCategories");
    },
    removeCategories(id) {
      this.$store
        .dispatch("category/removeCategories", id)
        .then((res) => {
          this.$toast.success("Delete Success");
        })
        .catch((res) => {
          this.$toast.error("Delete Failed");
        });
      setTimeout(() => {
        location.reload();
      }, 200);
    },
  },
};
</script>
