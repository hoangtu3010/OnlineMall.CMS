<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/department">Back to list</nuxt-link>
      <h4>Add new department</h4>
    </div>
    <hr />
    <div class="needs-validation" style="padding: 20px 0" novalidate>
      <div class="form-group">
        <input
          v-model="departmentData.name"
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
          <nuxt-link to="/department">
            <button
              @click="updateDepartment"
              type="submit"
              v-if="this.id"
              class="btn"
            >
              Save
            </button>
            <button
              @click="addDepartment"
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
      departmentData: {
        id: 0,
        name: "",
      },
    };
  },
  mounted() {},
  created() {
    this.getDepartment();
  },
  methods: {
    getDepartment() {
      if (this.id) {
        this.$store
          .dispatch("department/getDetailDepartment", this.id)
          .then((res) => {
            this.departmentData = { ...res };
          });
      } else {
        this.departmentData = {};
      }
    },
    addDepartment() {
      this.$store
        .dispatch("department/addDepartment", this.departmentData)
        .then((res) => {
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
    },
    updateDepartment() {
      this.$store
        .dispatch("department/updateDepartment", this.departmentData)
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