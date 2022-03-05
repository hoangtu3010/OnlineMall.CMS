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
          <th class="text-center">Idd</th>
          <th>Name Category</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{e.id}}</td>
          <td>{{e.name}}</td>
          <td class="text-center">
            <nuxt-link :to="'/category/'+e.id" class="button-action btn-edit">
              <i @click="editUser(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/admin/" class="button-action btn-details">
              <i class="fas fa-eye"></i>
            </nuxt-link>
            <nuxt-link  to="/admin" class="button-action btn-delete">
              <i @click="deleteUser(e.id)" class="fas fa-trash"></i>
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
    return {
      listData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$api.CATEGORIES_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
