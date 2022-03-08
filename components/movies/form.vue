<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/movies">Back to list</nuxt-link>
      <h4>Add new movies</h4>
    </div>
    <hr />
    <div class="row" style="padding: 20px 0">
      <div class="col-lg-4">
        <div class="form-group">
          <upload-file v-model="moviesData"/>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="form-group">
          <input
            v-model="moviesData.name"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Name</label>
        </div>
        <div class="form-group">
          <input
            v-model="moviesData.price"
            type="number"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Price</label>
        </div>
        <div class="form-group">
          <input
            v-model="moviesData.trailer"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Trailer</label>
        </div>
        <div class="form-group">
          <input
            v-model="moviesData.description"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Description</label>
        </div>
        <div class="form-group">
          <input
            v-model="moviesData.duration"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Duration</label>
        </div>
        <div class="form-group">
          <select v-model="moviesData.genreId" class="form-control">
            <option
              :value="option.id"
              v-for="option in genreData"
              :key="option.id"
            >
              {{ option.name }}
            </option>
          </select>
          <label for="" class="form-label">Genre</label>
        </div>
      </div>
      <div class="button-form">
          <button @click="updateMovies" v-if="this.id" class="btn">Save</button>
          <button @click="addMovies" v-if="!this.id" class="btn">Add</button>
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
      moviesData: {
        id: 0,
        name: "",
        price: 0,
        imageName: "",
        imageFile: "",
        imageSrc: "",
        trailer: "",
        description: "",
        duration: "",
        genreId: 1,
      },
    };
  },
  mounted() {
  },
  created() {
    this.getMovies();
    this.getGenre();
    this.moviesData.genreId = 1;
  },
  watch: {},
  computed: {
    genreData() {
      return this.$store.state.genre.listGenre;
    },
  },
  methods: {
    getGenre() {
      this.$store.dispatch("genre/getListGenre");
    },
    getMovies() {
      if (this.id) {
        this.$store.dispatch("movies/getDetailMovies", this.id).then((res) => {
          this.moviesData = { ...res };
        });
      } else {
        this.moviesData = {};
      }
    },
    addMovies() {
      this.$store
        .dispatch("movies/addMovies", this.moviesData)
        .then((res) => {
          this.$router.push('/movies')
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
      console.log(this.moviesData)
    },
    updateMovies() {
      this.$store
        .dispatch("movies/updateMovies", this.moviesData)
        .then((res) => {
          this.$router.push('/movies')
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