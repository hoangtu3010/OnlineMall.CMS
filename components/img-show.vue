<template>
  <div :key="keyUpload" class="form-image">
    <img :src="imageSrcPath" id="img_tag" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
    };
  },
  mounted() {},
  created() {
  },
  computed: {
    imageSrcPath() {
      return this.imgSrc? this.imgSrc:"default.jpg";
    },
  },
  watch: {
  
  },
  methods: {
   
  },
};
</script>

<style>
</style>