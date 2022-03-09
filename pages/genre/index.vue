<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Genres</h2>
      <nuxt-link to="/genre/create" class="button-action-add">
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
            <nuxt-link :to="'/genre/' + e.id" class="button-action btn-edit">
              <i @click="editGenre(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/genre" class="button-action btn-delete">
              <i @click="removeGenre(e.id)" class="fas fa-trash"></i>
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
    };
  },
  mounted() {},
  created() {
    this.getData();
  },
  computed: {
    listData() {
      return this.$store.state.genre.listGenre;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("genre/getListGenre");
    },
    removeGenre(id) {
      this.$store
        .dispatch("genre/removeGenre", id)
        .then((res) => {
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