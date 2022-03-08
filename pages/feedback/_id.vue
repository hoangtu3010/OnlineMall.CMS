<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>update feedback</h4>
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
          v-model="data.email"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Email</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.message"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Message</label>
      </div>
      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/feedback">
            <button @click="addOrUpdate" class="btn">Add</button>
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
      data: [
        
      ],
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id);
    console.log(this.id);
    this.getById(this.id);
  },
  methods: {
    getById(id) {
      if (id != 0) {
        this.$axios.get("/api/Feedbacks/GetFeedback/" + id).then((res) => {
          this.data = res.data;
        });
      }
    },
    addOrUpdate() {
      if (this.id === 0) {
        console.log(this.data)
        this.$axios.post("/api​/Feedbacks​/PostFeedback",this.data).then((res) => {});
      } else {
        this.$axios
          .put("/api/Feedbacks/PutFeedback/" + this.id, this.data)
          .then((response) => {
            this.getData();
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