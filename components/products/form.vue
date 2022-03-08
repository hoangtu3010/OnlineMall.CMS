<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/products">Back to list</nuxt-link>
      <h4><span v-if="!id">Add Product</span><span v-else>Edit Product</span> </h4>
    </div>
    <hr />
    <div class="row" style="padding: 20px 0">
      <div class="col-lg-4">
        <div class="form-group">
          <upload-file v-model="productData"/>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="form-group">
          <input
            v-model="productData.name"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Name</label>
        </div>
        <div class="form-group">
          <input
            v-model="productData.price"
            type="number"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Price</label>
        </div>
        <div class="form-group">
          <input
            v-model="productData.description"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Description</label>
        </div>
        <div class="form-group">
          <select v-model="productData.categoryId" class="form-control">
            <option
              :value="option.id"
              v-for="option in categoryData"
              :key="option.id"
            >
              {{ option.name }}
            </option>
          </select>
          <label for="" class="form-label">Category</label>
        </div>
      </div>
      <div class="button-form">
          <button @click="updateProduct" v-if="this.id" class="btn">Save</button>
          <button @click="addProduct" v-if="!this.id" class="btn">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      productData: {
        id: 0,
        name: "",
        price: 0,
        imageName: "",
        imageFile: "",
        imageSrc: "",
        description: "",
        categoryId: 1,
      },
    };
  },
  mounted() {
  },
  created() {
    this.getProduct();
    this.getCategory();
  },
  watch: {},
  computed: {
    categoryData() {
      return this.$store.state.category.listCategories;
    },
  },
  methods: {
    getCategory() {
      this.$store.dispatch("category/getListCategories");
    },
    getProduct() {
      if (this.id) {
        this.$store.dispatch("products/getDetailProducts", this.id).then((res) => {
          this.productData = { ...res };
        });
      } 
    },
    addProduct() {
      this.$store
        .dispatch("products/addProducts", this.productData)
        .then((res) => {
          this.$router.push('/products')
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
      console.log(this.productData)
    },
    updateProduct() {
      this.$store
        .dispatch("products/updateProducts", this.productData)
        .then((res) => {
          this.$router.push('/products')
          this.$toast.success("Update Success");
        })
        .catch((res) => {
          this.$toast.error("Update Failed");
        });
    },
  },
};
</script>

<style scoped>
.button-form {
  float: right;
}
</style>