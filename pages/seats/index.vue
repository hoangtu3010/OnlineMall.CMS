<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Seats</h2>
      <nuxt-link :to="'/seats/'+0" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Rank</th>
          <th>Row</th>
          <th>Colums</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{e.id}}</td>
          <td>{{e.name}}</td>
          <td>{{e.price}}</td>
          <td>{{e.rank}}</td>
          <td>{{e.row}}</td>
          <td>{{e.column}}</td>
          <td class="text-center">
            <nuxt-link :to="'/seats/'+e.id" class="button-action btn-edit">
              <i @click="editGenre(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link  to="/seats" class="button-action btn-delete">
              <i @click="deleteSeat(e.id)" class="fas fa-trash"></i>
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
        .get(this.$api.SEATS_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
        });
    },
    deleteSeat(id){
      console.log(id)
      this.$axios.delete("/api/Seats/DeleteSeats/"+id ).then(response=>{
        this.getData()
      })
    },
    
  },
};
</script>

<style>
</style>