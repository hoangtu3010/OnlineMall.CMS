<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Movies Today</h2>
      <nuxt-link :to="'/movieToday/' + 0" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Movie</th>
          <th>Show date</th>
          <th>Show time</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td>
            {{ e.movies.name }}
          </td>
          <td>{{ formatDate(e.showDate) }}</td>
          <td>{{ formatDate(e.showTime,'HH:mm') }}</td>
          <td class="text-center">
            <nuxt-link
              :to="'/movieToday/' + e.id"
              class="button-action btn-edit"
            >
              <i @click="editUser(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/movieToday" class="button-action btn-delete">
              <i @click="deletemovieToday(e.id)" class="fas fa-trash"></i>
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
  created() {
    this.getData();
  },
  computed: {
    listData() {
      return this.$store.state.movieToday.listData;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("movieToday/getListMovieToday");
    },
    deletemovieToday(id) {
      this.$store
        .dispatch("movieToday/removeMovieToday", id)
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
