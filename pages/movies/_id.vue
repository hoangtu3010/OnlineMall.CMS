<template>
  <movies-form :id="id" />
</template>

<script>
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id)
    };
  },
};
</script>

<style>
</style>