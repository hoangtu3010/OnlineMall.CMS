<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Shop</h2>
      <nuxt-link to="/shops/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Logo</th>
          <th>Contact</th>
          <th>ShowTime</th>
          <th>Link</th>
          <th>Description</th>
          <th>DepartmentId</th>

         
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{e.id}}</td>
          <td>{{e.name}}</td>
          <td>{{e.image}}</td>
          <td>{{e.logo}}</td>
          <td>{{e.contact}}</td>
          <td>{{e.showTime}}</td>
          <td>{{e.link}}</td>
          <td>{{e.description}}</td>
          <td>{{e.departmentId}}</td>


          <td class="text-center">
            <nuxt-link :to="'/shops/'+e.id" class="button-action btn-edit">
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
  data(){
    return{
      listData:{}
    }
  },
  methods:{
    getData(){
       this.$axios
        .get(this.$api.SHOPS_GET_ALL)
        .then((res) => {
          console.log(res.data)
          return this.listData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }


}
</script>

<style>

</style>