<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Add new shop</h4>
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
        <input
          v-model="data.image"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Image</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.logo"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">logo</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.contact"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Contact</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.showTime"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Show time</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.link"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">link</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.description"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Description</label>
      </div>
      
      <div class="form-group">
        <select v-model="data.departmentId" name="" id="">
          <option
            v-for="(item, index) in dataDepar"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/shops">
            <button @click="addOrUpdate" type="submit" class="btn">
              update
            </button>
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
      id:0,
      data:{
        id:0,
        showTime:new Date()
      },
      dataDepar:{}
    };
  },
  created(){
    this.id = parseInt(this.$route.params.id);
    this.getAllDepar()
    this.getByIdShop(this.id)

  },
  methods:{
    getByIdShop(id) {
      this.$axios.get("/api/Shops/GetShop/" + id).then((res) => {
        this.data = res.data;
      });
    },
    addOrUpdate(){
      this.$axios
        .put("/api/Shops/PutShop/"+this.id, this.data)
        .then((response) => {
          this.getData();
        })
        .catch((e) => {});
    },
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
    },
    getAllDepar(){
      this.$axios
        .get(this.$api.DEPARTMENTS_GET_ALL)
        .then((res) => {
          console.log(res.data)
          this.dataDepar = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }

  }
};
</script>

<style>
</style>