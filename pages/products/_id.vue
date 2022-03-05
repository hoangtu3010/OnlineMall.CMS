<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>update product</h4>
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
          v-model="data.price"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Price</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.rateStar"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">RateStar</label>
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
          v-model="data.quantily"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Quantily</label>
      </div>
      <div class="form-group">
        <select v-model="data.categoryId" name="" id="">
          <option
            v-for="(item, index) in dataCate"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/products">
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
      id: 0,
      data: [],
      dataCate: [],
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id);
    this.getByIdProduct(this.id);
    this.getAllCate();
  },
  methods: {
    getAllCate() {
      this.$axios
        .get(this.$api.CATEGORIES_GET_ALL)
        .then((res) => {
          this.dataCate = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getByIdProduct(id) {
      this.$axios.get("/api/Products/GetProduct/" + id).then((res) => {
        this.data = res.data;
      });
    },
    addOrUpdate() {
    
      if (this.id > 0) {
        this.$axios
          .put("/api/Products/PutProduct/" + this.id, this.data)
          .then((response) => {
            this.getData();
          });
      } else {
        console.log(this.data)
        this.$axios.post(this.$api.PRODUCTS_CREATE, this.data).then((res) => {
         
        });
      }
    },
    getData() {
      this.$axios
        .get(this.$api.CATEGORIES_GET_ALL)
        .then((res) => {
          return (this.listData = res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>