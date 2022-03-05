<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Add new product</h4>
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
      data: {id:0},
      dataCate: [],
    };
  },
  created(){
    this.getAllCate()
  },
  methods: {
    addOrUpdate() {
      this.$axios
        .post(this.$api.PRODUCTS_CREATE, this.data)
        .then((response) => {
          this.getData();
        })
        .catch((e) => {});
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
  },
};
</script>

<style>
</style>