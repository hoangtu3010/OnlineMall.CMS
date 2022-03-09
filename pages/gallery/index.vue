<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Gallery</h2>
      <nuxt-link to="/gallery/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td><img :src="e.imageSrc" alt="image" width="60"></td>
          <td>{{ e.imageName }}</td>
          <td>{{ e.description }}</td>
          <td class="text-center">
            <nuxt-link :to="'/gallery/' + e.id" class="button-action btn-edit">
              <i class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/gallery" class="button-action btn-delete">
              <i @click="removeGallery(e.id)" class="fas fa-trash"></i>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.getData();
  },
  computed: {
    listData() {
      return this.$store.state.gallery.listData;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("gallery/getListGallery");
    },
    removeGallery(id) {
      this.$store
        .dispatch("gallery/removeGallery", id)
        .then((res) => {
          this.getData()
          this.$toast.success("Delete Success");
        })
        .catch((res) => {
          this.$toast.error("Delete Failed");
        });
    },
  },
};
</script>


<style>
</style>