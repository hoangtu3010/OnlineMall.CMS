<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/shops">Back to list</nuxt-link>
      <h4><span v-if="!id">Add new shop</span><span v-else>Edit shop</span></h4>
    </div>
    <hr />
    <div class="row" style="padding: 20px 0">
      <div class="col-lg-4">
        <div class="form-group">
          <upload-file v-model="shopData" :key="keyUpload" />
          <label for="" class="form-label">Image</label>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="form-group">
          <input
            v-model="shopData.name"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Name</label>
        </div>
        <div class="form-group col-md-2">
          <upload-file
            textStr="imageLogoName"
            :key="keyUpload"
            v-model="shopData"
          />
          <label for="" class="form-label">Logo</label>
        </div>
        <div class="form-group">
          <input
            v-model="shopData.contact"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Contact</label>
        </div>
        <div class="form-group">
          <input
            v-model="shopData.showTime"
            type="time"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label"
            >ShowTime</label
          >
        </div>
        <div class="form-group">
          <input
            v-model="shopData.description"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Description</label>
        </div>
        <div class="form-group">
          <input
            v-model="shopData.link"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Link</label>
        </div>
        <div class="form-group">
          <select v-model="shopData.departmentId" class="form-control">
            <option
              :value="option.id"
              v-for="option in departmentData"
              :key="option.id"
            >
              {{ option.name }}
            </option>
          </select>
          <label for="" class="form-label">Department</label>
        </div>
      </div>
      <div class="button-form">
        <button @click="updateShop" v-if="this.id" class="btn">Save</button>
        <button @click="addShop" v-if="!this.id" class="btn">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      keyUpload: 0,
      shopData: {
        id: 0,
        name: "",
        price: 0,
        imageName: "",
        imageFile: "",
        imageSrc: "",
        trailer: "",
        description: "",
        duration: "",
      },
    };
  },
  mounted() {},
  created() {
    this.getShop();
    this.getDepartment();
  },
  watch: {
    shopData: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  computed: {
    departmentData() {
      return this.$store.state.department.listDepartment;
    },
  },
  methods: {
    moment,
    getDepartment() {
      this.$store.dispatch("department/getListDepartment");
    },
    getShop() {
      if (this.id) {
        this.$store.dispatch("shops/getDetailShops", this.id).then((res) => {
          this.shopData = { ...res };
          this.keyUpload++;
        });
      } else {
        this.shopData = {};
      }
    },
    addShop() {
      this.$store
        .dispatch("shops/addShops", this.shopData)
        .then((res) => {
          this.$router.push("/shops");
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
      console.log(this.shopData);
    },
    updateShop() {
      this.$store
        .dispatch("shops/updateShops", this.shopData)
        .then((res) => {
          this.$router.push("/shops");
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