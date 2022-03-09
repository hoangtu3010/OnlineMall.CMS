<template>
  <div class="form-image" :key="keyItem">
    <i class="ion-upload"></i>
    <img :src="imgSrcPath" id="img_tag" />
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
      inputImg: "",
      keyItem: 0,
    };
  },
  computed: {
    imgSrcPath() {
      if (this.inputImg) {
        return this.inputImg ? this.inputImg : "default.jpg";
      }
      if(this.textStr){
         return this.moviesData.imageLogoSrc
        ? this.moviesData.imageLogoSrc
        : "default.jpg";
      }
      return this.moviesData.imageSrc
        ? this.moviesData.imageSrc
        : "default.jpg";
    },
  },
  mounted() {},
  created() {
    this.moviesData = this.value;
  },
  watch: {
    moviesData: {
      handler(value) {
        this.$emit("input", value);
        console.log("aa", value);
        this.keyItem++;
      },
      deep: true,
    },
  },
  methods: {
    uploadFile(event) {
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append("file", file);
        const reader = new FileReader();
        reader.onload = (x) => {
          this.inputImg = x.target.result;
          this.$store
            .dispatch("upload-file/addFile", formData)
            .then((res) => {
              if(this.textStr){
              this.moviesData[this.textStr] = res;
              }else{
              this.moviesData.imageName = res;
              }
              this.$toast.success("Upload File Successfully");
            })
            .catch((err) => {
              this.$toast.error("Upload File Failed");
            });
        };

        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style>
</style>