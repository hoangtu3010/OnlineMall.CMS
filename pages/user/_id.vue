<template>
  <user-form :id="id" />
</template>

<script>
export default {
  data() {
    return {
      id: Number(this.$route.params.id),
    };
  },
  mounted() {},
  created() {
  },
};
</script>

<style>
</style>