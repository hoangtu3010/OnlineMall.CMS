
<template>
   <div class="data-list table-style">
    <div class="cart-header">
      <h2>Departerments</h2>
      <nuxt-link to="/department/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name </th>
         
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{e.id}}</td>
          <td>{{e.name}}</td>
          <td class="text-center">
            <nuxt-link :to="'/department/'+e.id" class="button-action btn-edit">
              <i @click="editUser(e.id)" class="fas fa-pen"></i>
            </nuxt-link>
         
            <nuxt-link  to="/department" class="button-action btn-delete">
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
  created(){
    this.getData()
  },
data() {
    return {
      listData: [],
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$api.DEPARTMENTS_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteUser(id){
      this.$axios.delete("/api/Departments/DeleteDepartment/"+id).then((res)=>{
        this.getData()
      })
    }
  },
}
</script>

<style>

</style>
<style>

</style>