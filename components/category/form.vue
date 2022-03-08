<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/category">Back to list</nuxt-link>
      <h4>Add new Categories</h4>
    </div>
    <hr />
    <div class="needs-validation" style="padding: 20px 0" novalidate>
      <div class="form-group">
        <input
          v-model="categoriesData.name"
          type="text"
          class="form-control"
          placeholder=" "
          required
        />
        <label for="" class="form-label">Name</label>
        <div class="invalid-feedback">Please choose a name.</div>
      </div>
      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/category">
            <button
              @click="updateCategories"
              type="submit"
              v-if="this.id"
              class="btn"
            >
              Save
            </button>
            <button
              @click="addCategories"
              type="submit"
              v-if="!this.id"
              class="btn"
            >
              Add
            </button>
          </nuxt-link>
        </div>
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
      categoriesData: {
        id: 0,
        name: "",
      },
    };
  },
  mounted() {},
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      if (this.id) {
        this.$store
          .dispatch("category/getDetailCategories", this.id)
          .then((res) => {
            this.categoriesData = { ...res };
          });
      } else {
        this.categoriesData = {};
      }
    },
    addCategories() {
      this.$store
        .dispatch("category/addCategories", this.categoriesData)
        .then((res) => {
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
    },
    updateCategories() {
      this.$store
        .dispatch("category/updateCategories", this.categoriesData)
        .then((res) => {
          this.$toast.success("Update Success");
        })
        .catch((res) => {
          this.$toast.error("Update Failed");
        });
    },
  },
};
</script>

<style>
</style>