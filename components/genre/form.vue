<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/genre">Back to list</nuxt-link>
      <h4>Add new Genre</h4>
    </div>
    <hr />
    <div class="needs-validation" style="padding: 20px 0" novalidate>
      <div class="form-group">
        <input
          v-model="genreData.name"
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
          <nuxt-link to="/genre">
            <button
              @click="updateGenre"
              v-if="this.id"
              class="btn"
            >
              Save
            </button>
            <button @click="addGenre" v-if="!this.id" class="btn">
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
      genreData: {
        id: 0,
        name: "",
      },
    };
  },
  mounted() {},
  created() {
    this.getGenre();
  },
  methods: {
    getData() {
      this.$store.dispatch("genre/getListGenre");
    },
    getGenre() {
      if (this.id) {
        this.$store.dispatch("genre/getDetailGenre", this.id).then((res) => {
          this.genreData = { ...res };
        });
      } else {
        this.genreData = {};
      }
    },
    addGenre() {
      this.$store.dispatch("genre/addGenre", this.genreData).then(res => {
        this.$toast.success("Add Success"),
        this.getData()
        
      }).catch(res => {
        this.$toast.error('Add Failed')
      })
    },
    updateGenre() {
      this.$store.dispatch("genre/updateGenre", this.genreData).then(res => {
        this.$toast.success("Update Success")
        this.getData()
      }).catch(res => {
        this.$toast.error('Update Failed')
      });
    },
  },
};
</script>

<style>
</style>