<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/gallery">Back to list</nuxt-link>
      <h4>Add new movies</h4>
    </div>
    <hr />
    <div class="row" style="padding: 20px 0">
      <div class="col-lg-4">
        <div class="form-group">
          <upload-file @done="saveFile" v-model="galleryData"/>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="form-group">
          <input
            v-model="galleryData.description"
            type="text"
            class="form-control"
            placeholder=" "
          />
          <label for="" class="form-label">Description</label>
        </div>
       
      </div>
      <div class="button-form">
          <button @click="updateGallery" v-if="this.id" class="btn">Save</button>
          <button @click="addGallery" v-if="!this.id" class="btn">Add</button>
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
      galleryData: {
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
    this.getGallery();
  },
  watch: {},
  computed: {
    
  },
  methods: {
  
    getGallery() {
      if (this.id) {
        this.$store.dispatch("gallery/getDetailGallery", this.id).then((res) => {
          this.galleryData = { ...res };
        });
      } else {
        this.galleryData = {};
      }
    },saveFile(file){
      if(file){
        this.galleryData.imageSrc=file.filePath
        this.galleryData.imageName=file.fileName
        console.log(this.galleryData)
      }
    },
    addGallery() {
      this.$store
        .dispatch("gallery/addGallery", this.galleryData)
        .then((res) => {
          this.$router.push('/gallery')
          this.$toast.success("Add Success");
        })
        .catch((res) => {
          this.$toast.error("Add Failed");
        });
      console.log(this.galleryData)
    },
    updateGallery() {
      this.$store
        .dispatch("gallery/updateGallery", this.galleryData)
        .then((res) => {
          this.$router.push('/gallery')
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