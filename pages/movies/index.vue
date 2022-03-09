<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Movies</h2>
      <nuxt-link to="/movies/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Trailer</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Genre</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td><img :src="e.imageSrc" alt="image" width="60"></td>
          <td>{{ e.name }}</td>
          <td>{{ e.price }}</td>
          <td>{{ e.trailer }}</td>
          <td>{{ e.description }}</td>
          <td>{{ e.duration }}</td>
          <td>{{ e.genre.name }}</td>
          <td class="text-center">
            <nuxt-link :to="'/movies/' + e.id" class="button-action btn-edit">
              <i class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/movies" class="button-action btn-delete">
              <i @click="removeMovies(e.id)" class="fas fa-trash"></i>
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
      return this.$store.state.movies.listMovies;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("movies/getListMovies");
    },
    removeMovies(id) {
      this.$store
        .dispatch("movies/removeMovies", id)
        .then((res) => {
          this.$toast.success("Delete Success");
          this.getData()
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