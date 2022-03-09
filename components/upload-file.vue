<template>
  <div :key="keyUpload" class="form-image">
    <i class="ion-upload"></i>
    <img :src="imageSrcPath" id="img_tag" />
    <b-form-file
      @change="uploadFile($event)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      },
    },
    textStr: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
      moviesData: {},
      keyUpload: 0,
    };
  },
  mounted() {},
  created() {
    this.moviesData = this.value ;
  },
  computed: {
    imageSrcPath() {
      if (this.textStr === "") {
        return this.moviesData.imageSrc
          ? this.moviesData.imageSrc
          : "default.jpg";
      } else {
        return this.moviesData.imageLogoSrc
          ? this.moviesData.imageLogoSrc
          : "default.jpg";
      }
    },
  },
  watch: {
    moviesData:{
      handler(){
      this.$emit("input", this.moviesData);
      },
      deep:true
    },
  },
  methods: {
    uploadFile(event) {
      if (this.textStr === "") {
       if (event.target.files && event.target.files[0]) {
          let file = event.target.files[0];
          const reader = new FileReader();
          reader.onload = (x) => {
            this.moviesData.imageSrc = x.target.result;
            this.keyUpload++;
            let formData = new FormData();
            formData.append("file", file);

            this.$store
              .dispatch("upload-file/addFile", formData)
              .then((res) => {
                this.moviesData.imageName = res;
                this.$toast.success("Upload File Successfully");
              })
              .catch((err) => {
                this.$toast.error("Upload File Failed");
              });
          };

          reader.readAsDataURL(file);
         }
      } else {
        if (event.target.files && event.target.files[0]) {
          let file = event.target.files[0];
          const reader = new FileReader();
          reader.onload = (x) => {
            this.moviesData.imageLogoSrc = x.target.result;
            this.keyUpload++;

            let formData = new FormData();
            formData.append("file", file);

            this.$store
              .dispatch("upload-file/addFile", formData)
              .then((res) => {
                this.moviesData.imageLogoName = res;
                this.$toast.success("Upload File Successfully");
              })
              .catch((err) => {
                this.$toast.error("Upload File Failed");
              });
          };

          reader.readAsDataURL(file);
        }
      }
    },
  },
};
</script>

<style>
</style>