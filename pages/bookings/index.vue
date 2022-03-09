<template>
  <div class="data-list table-style">
    <div class="cart-header">
      <h2>bookings</h2>
   
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Total</th>
          <th>MoviesToday</th>
          <th>Seats</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in listData" :key="e.id">
          <td class="text-center">{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.phone }}</td>
          <td>{{ e.email }}</td>
          <td>{{e.total}}</td>
          <td>{{e.moviesTodayId}}</td>
          <td>{{e.seatsId}}</td>


          <td class="text-center">
           
            <nuxt-link to="/bookings" class="button-action btn-delete">
              <i @click="deleteBooking(e.id)" class="fas fa-trash"></i>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {};
  },
  computed: {
    listData() {
      return this.$store.state.bookings.listBooking;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("bookings/getListBooking");
    },
    deleteBooking(id) {
      this.$store
        .dispatch("bookings/removeBooking", id)
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