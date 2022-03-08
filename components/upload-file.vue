<template>
  <div class="form-image">
    <i class="ion-upload"></i>
    <img
      :src="moviesData.imageSrc ? moviesData.imageSrc : 'default.jpg'"
      id="img_tag"
    />
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
  },
  data() {
    return {
      moviesData: {},
    };
  },
  mounted() {},
  created() {
    this.moviesData = { ...this.value };
  },
  watch: {
    moviesData() {
      this.$emit("input", this.moviesData);
    },
  },
  methods: {
    uploadFile(event) {
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (x) => {
          this.moviesData.imageSrc = x.target.result;
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
    },
  },
};
</script>

<style>
</style>