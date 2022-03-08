<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <nuxt-link to="/seats">Back to list</nuxt-link>
      <h4>Add new seats</h4>
    </div>
    <hr />
    <div class="needs-validation" style="padding: 20px 0">
      <div class="form-group">
        <input
          v-model="seatsData.name"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Name</label>
      </div>
      <div class="form-group">
        <input
          v-model="seatsData.price"
          type="number"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Price</label>
      </div>
      <div class="form-group">
        <b-form-select class="form-control" :options="rank" v-model="seatsData.rank">
        </b-form-select>
        <label for="" class="form-label">Rank</label>
      </div>
      <div class="form-group">
        <b-form-select class="form-control" :options="rows" v-model="seatsData.row">
        </b-form-select>
        <label for="" class="form-label">Row</label>
      </div>
      <div class="form-group">
        <b-form-select class="form-control" :options="columns" v-model="seatsData.column">
        </b-form-select>
        <label for="" class="form-label">Column</label>
      </div>
      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/seats">
            <button
              @click="updateSeats"
              v-if="this.id"
              class="btn"
            >
              Save
            </button>
            <button @click="addSeats" v-if="!this.id" class="btn">
              Add
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/constants/common.js'

export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      seatsData: {
        id: 0,
        name: "",
        price: 0,
        rank: 'normal',
        column: 1,
        row: 1
      },
      rank: common.CINEMA_RANKS,
      columns: common.CINEMA_COLUMNS,
      rows: common.CINEMA_ROWS
    };
  },
  mounted() {},
  created() {
    this.getSeats();
    this.seatsData.rank = 'normal'
    this.seatsData.row = 1
    this.seatsData.column = 1
  },
  methods: {
    getSeats() {
      if (this.id) {
        this.$store.dispatch("seats/getDetailSeats", this.id).then((res) => {
          this.seatsData = { ...res };
        });
      } else {
        this.seatsData = {};
      }
    },
    addSeats() {
      this.$store.dispatch("seats/addSeats", this.seatsData).then(res => {
        this.$toast.success("Add Success")
      }).catch(res => {
        this.$toast.error('Add Failed')
      })
    },
    updateSeats() {
      this.$store.dispatch("seats/updateSeats", this.seatsData).then(res => {
        this.$toast.success("Update Success")
      }).catch(res => {
        this.$toast.error('Update Failed')
      });
    },
  },
};
</script>

<style>
</style>