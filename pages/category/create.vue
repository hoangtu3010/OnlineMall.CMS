<template>
   <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Add new Category</h4>
    </div>
    <hr />
    <div style="padding: 20px 0">
      <div class="form-group">
        <input
        v-model="data.name"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Name</label>
      </div>

      

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/category">
            <button @click="addOrUpdate" type="submit" class="btn">Add</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:{
        id:'',
        name:'',
      }
    };
  },
  methods:{
    addOrUpdate(){
      this.$axios
          .post(this.$api.CATEGORY_CREATE, {
            name: this.data.name,
          })
          .then((response) => {
            this.getData()
          })
          .catch((e) => {});
    },
    getData() {
      this.$axios
        .get(this.$api.CATEGORIES_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  }
};
</script>

<style>
</style>