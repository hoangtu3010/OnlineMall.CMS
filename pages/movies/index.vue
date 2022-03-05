<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <nuxt-link :to="'/movies/'+0" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th>Image</th>
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
          <td>{{ e.name }} </td>
          <td>{{ e.image }}</td>
          <td>{{ e.price }}</td>
          <td>{{ e.trailer }}</td>
          <td>{{ e.description }}</td>
          <td>{{ e.duration }}</td>
          <td>{{ e.genre.name}}</td>
          <td class="text-center">
            <nuxt-link
              :to="'/movies/' + e.id"
              class="button-action btn-edit"
            >
              <i @click="editMovie(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/movies" class="button-action btn-delete">
              <i @click="deleteMovie(e.id)" class="fas fa-trash"></i>
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
  mounted() {},
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$api.MOVIES_GET_ALL)
        .then((res) => {
          return (this.listData = res.data);
        })
        .catch((e) => {});
    },
    deleteMovie(id) {
      this.$axios.delete("/api/Movies/DeleteMovies/" + id).then((response) => {
        this.getData();
      });
    },
  },
};
</script>


<style>
</style>