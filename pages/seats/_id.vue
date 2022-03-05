<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4> Seats</h4>
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
          v-model="data.rank"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Rank</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.row"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Row</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.column"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Column</label>
      </div>
      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/seats">
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
      id: 0,
      data: {}
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id);
    this.getById(this.id);
  },
  methods: {
    getById(id) {
      if (id != 0) {
        this.$axios.get("/api/Seats/GetSeats/" + id).then((res) => {
          this.data = res.data;
        });
      }
    },
    addOrUpdate() {
      if (this.id === 0) {
        this.$axios.post(this.$api.SEATS_CREATE,this.data).then((res) => {
        });
      } else {
        this.$axios
          .put("/api/Seats/PutSeats/" + this.id, this.data)
          .then((response) => {
            this.getData();
          });
      }
    },
    getData() {
      this.$axios
        .get(this.$api.SEATS_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
        });
    },
  },
};
</script>

<style>
</style>