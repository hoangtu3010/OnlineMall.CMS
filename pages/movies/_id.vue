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
          v-model="data.image"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Image</label>
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
          v-model="data.trailer"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Trailer</label>
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
          v-model="data.duration"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Duration</label>
      </div>
       <div class="form-group">
        <select v-model="data.genreId" name="" id="">
          <option
            v-for="(item, index) in dataGenre"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <label for="" class="form-label">Genre</label>
      </div>
      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/movies">
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
      data: {},
      dataGenre:{}
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id);
    this.getById(this.id);
    this.getAllGenre()
  },
  methods: {
    getAllGenre() {
      this.$axios
        .get(this.$api.GENRES_GET_ALL)
        .then((res) => {
          this.dataGenre = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getById(id) {
      if (id != 0) {
        this.$axios.get("/api/Movies/GetMovies/" + id).then((res) => {
          this.data = res.data;
        });
      }
    },
    addOrUpdate() {
      if (this.id === 0) {
        this.$axios.post(this.$api.MOVIES_CREATE,this.data).then((res) => {
        });
      } else {
        this.$axios
          .put("/api/Movies/PutMovies/" + this.id, this.data)
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