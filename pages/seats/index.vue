<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>Seats</h2>
      <nuxt-link to="/seats/create" class="button-action-add">
        <i class="fas fa-plus"></i>
      </nuxt-link>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Rank</th>
          <th>Columns</th>
          <th>Row</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.price }}</td>
          <td>{{ rank.find(x => x.value === e.rank).text }}</td>
          <td>{{ columns.find(x => x.value === e.column).text }}</td>
          <td>{{ rows.find(x => x.value === e.row).text }}</td>
          <td class="text-center">
            <nuxt-link :to="'/seats/' + e.id" class="button-action btn-edit">
              <i class="fas fa-pen"></i>
            </nuxt-link>
            <nuxt-link to="/seats" class="button-action btn-delete">
              <i @click="removeSeats(e.id)" class="fas fa-trash"></i>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import common from '@/constants/common'

export default {
  data() {
    return {
      rank: common.CINEMA_RANKS,
      columns: common.CINEMA_COLUMNS,
      rows: common.CINEMA_ROWS,
    };
  },
  mounted() {},
  created() {
    this.getData();
  },
  computed: {
    listData() {
      return this.$store.state.seats.listSeats;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("seats/getListSeats");
    },
    removeSeats(id) {
      this.$store
        .dispatch("seats/removeSeats", id)
        .then((res) => {
          this.$toast.success("Delete Success");
        })
        .catch((res) => {
          this.$toast.error("Delete Failed");
        });
      setTimeout(() => {
        location.reload();
      }, 200);
    },
  },
};
</script>

<style>
</style>