<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <nuxt-link :to="'/movieToday/'+0" class="button-action-add">
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
          <td>{{ e.showDate }}</td>
          <td>{{ e.showTime }}</td>
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
      listData: [],
      listMove: [],
    };
  },
  created() {
    this.getData();
    this.getDataMovie();
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$api.MOVIETODAY_GET_ALL)
        .then((res) => {
          console.log(res.data)
          return (this.listData = res.data);
          
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
    getDataMovie() {
      this.$axios
        .get(this.$api.MOVIES_GET_ALL)
        .then((res) => {
          this.listMove = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletemovieToday(id) {
      this.$axios
        .get("/api/MoviesTodays/DeleteMoviesToday/" + id)
        .then((response) => {});
    },
  },
};
</script>
