<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Genner</h2>
      <nuxt-link :to="'/genre/'+0" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Genre Name</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{e.id}}</td>
          <td>{{e.name}}</td>
          <td class="text-center">
            <nuxt-link :to="'/genre/'+e.id" class="button-action btn-edit">
              <i @click="editGenre(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link  to="/genre" class="button-action btn-delete">
              <i @click="deleteGenre(e.id)" class="fas fa-trash"></i>
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
        .get(this.$api.GENRES_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
        });
    },
    deleteGenre(id){
      console.log(id)
      this.$axios.delete("/api/Genres/DeleteGenre/"+id ).then(response=>{
        this.getData()
      })
    },
    
  },
};
</script>

<style>
</style>