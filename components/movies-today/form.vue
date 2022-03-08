<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/movieToday">Back to list</nuxt-link>
      <h4>Add new movies today</h4>
    </div>
    <hr />
    <div class="row" style="padding: 20px 0">
    
      <div class="col-lg-8">
         <div class="form-group">
          <select v-model="movieTodayData.moviesId" class="form-control">
            <option
              :value="option.id"
              v-for="option in moviesData"
              :key="option.id"
            >
              {{ option.name }}
            </option>
          </select>
          <label for="" class="form-label">Name</label>
        </div>
        <div class="form-group">
          <input
            v-model="movieTodayData.showDate"
            type="date"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Show date</label>
        </div>
        <div class="form-group">
          <input
            v-model="movieTodayData.showTime"
            type="time"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Show time</label>
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
      movieTodayData: {
        id: 0,
        moviesId: 0,
        showDate:undefined,
        showTime:undefined,
      },
    };
  },
  mounted() {
  },
  created() {
    this.getMovieToday();
    this.getMoviesData();
    this.movieTodayData.moviesId = 1;
  },
  watch: {},
  computed: {
    moviesData() {
      return this.$store.state.movies.listMovies;
    },
  },
  methods: {
    getMoviesData() {
      this.$store.dispatch("movies/getListMovies");
    },
    getMovieToday() {
      if (this.id) {
        this.$store.dispatch("movieToday/getDetailMovieToday", this.id).then((res) => {
          this.movieTodayData = { ...res };
        });
      } 
    },
    addMovies() {
        this.movieTodayData.showTime=new Date(this.movieTodayData.showDate+" "+this.movieTodayData.showTime)
        this.movieTodayData.showDate=new Date(this.movieTodayData.showDate)

      this.$store
        .dispatch("movieToday/addMovieToday", this.movieTodayData)
        .then((res) => {
          this.$router.push('/movieToday')
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
      console.log(this.movieTodayData)
    },
    updateMovies() {
      this.$store
        .dispatch("movieToday/updateMovieToday", this.movieTodayData)
        .then((res) => {
          this.$router.push('/movieToday')
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