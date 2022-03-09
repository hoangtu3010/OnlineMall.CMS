<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Product</h2>
      <nuxt-link to="/products/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Category</th>

          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.price }}</td>
          <td>{{ e.description }}</td>
          <td><img :src="e.imageSrc" alt="image" width="60" /></td>

          <td>{{ e.category.name }}</td>

          <td class="text-center">
            <nuxt-link :to="'/products/' + e.id" class="button-action btn-edit">
              <i  class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/admin/" class="button-action btn-details">
              <i class="fas fa-eye"></i>
            </nuxt-link>
            <nuxt-link to="/products" class="button-action btn-delete">
              <i @click="deleteProducts(e.id)" class="fas fa-trash"></i>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.getData();
    console.log(this.listData);
  },
  data() {
    return {};
  },
  computed: {
    listData() {
      return this.$store.state.products.listData;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("products/getListProducts");
    },
    deleteProducts(id) {
      this.$store
        .dispatch("products/removeProducts", id)
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

<style>
</style>