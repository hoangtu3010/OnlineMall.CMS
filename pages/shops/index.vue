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
          <th>Department</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{e.id}}</td>
          <td>{{e.name}}</td>
          <td><img :src="e.imageSrc" alt="image" width="60"></td>
          <td><img :src="e.imageLogoSrc" alt="image" width="60"></td>
          <td>{{e.contact}}</td>
          <td>{{ formatDate(e.showTime,'HH:mm') }}</td>
          <td>{{e.link}}</td>
          <td>{{e.description}}</td>
          <td><span v-if="e.department">{{e.department.name}}</span></td>


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
    }
  },
    computed: {
    listData() {
      return this.$store.state.shops.listData;
    },
  },
  methods:{
    getData(){
             this.$store.dispatch("shops/getListShops");
    },
     deleteProducts(id) {
      this.$store
        .dispatch("shops/removeShops", id)
        .then((res) => {
          this.$toast.success("Delete Success");
        })
        .catch((res) => {
          this.$toast.error("Delete Failed");
        });
      setTimeout(() => {
        location.reload();
      }, 200);
    },
  }


}
</script>

<style>

</style>