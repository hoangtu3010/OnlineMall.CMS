<template>
  <div class="dashboard-section">
    <div class="statistics-box">
      <div class="statistics-box-item">
        <i class="fas fa-shopping-bag" />
        <h3>Bookings</h3>
        <span>{{ listDataBookingsCount }}</span>
      </div>
      <div class="statistics-box-item">
        <i class="fas fa-store-alt"></i>
        <h3>Shops</h3>
        <span>{{ listDataShops }}</span>
      </div>
      <div class="statistics-box-item">
        <i class="fas fa-film"></i>
        <h3>Movies</h3>
        <span>{{ listDataMovies }}</span>
      </div>
      <div class="statistics-box-item">
        <i class="fab fa-product-hunt"></i>
        <h3>Products</h3>
        <span>{{ listDataProducts }}</span>
      </div>
    </div>
    <highchart
      :options="chartOptions"
      :modules="['exporting']"
      :update="watchers"
      style="width: 100%; overflow: unset"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lstBooking: [],
      caption: "Chart caption here",
      title: "Cinema sales statistics chart",
      subtitle: "2022",
      points: [],
      seriesColor: "",
      animationDuration: 1000,
      chartType: "",
      colorInputIsSupported: null,
      chartTypes: [],
      durations: [0, 500, 1000, 2000],
      seriesName: "$",
      yAxis: "Money",
      watchers: ["options.title", "options.series"],
      colors: [
        "Red",
        "Green",
        "Blue",
        "Pink",
        "Orange",
        "Brown",
        "Black",
        "Purple",
      ],
      lastPointClicked: {
        timestamp: "",
        x: "",
        y: "",
      },
      sexy: false,
    };
  },
  created() {
    this.getListBooking()
    this.getDataBookings();
    this.getDataShops();
    this.getDataMovies();
    this.getDataProducts();
    setTimeout(() => {
      this.lstBooking.forEach(e => {
        this.points.push(e.total)
      });
    }, 1000);
  },
  computed: {
    listDataBookingsCount() {
      return this.$store.state.bookings.listBooking.length;
    },
    listDataShops() {
      return this.$store.state.shops.listData.length;
    },
    listDataProducts() {
      return this.$store.state.products.listData.length;
    },
    listDataMovies() {
      return this.$store.state.movies.listMovies.length;
    },
    chartOptions() {
      const ctx = this;
      return {
        caption: {
          text: this.caption,
          style: {
            color: this.sexy ? this.invertedColor(0) : "#black",
          },
        },
        chart: {
          backgroundColor: this.sexy
            ? {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                  [0, this.seriesColor],
                  [0.5, "#ffffff"],
                  [1, this.seriesColor],
                ],
              }
            : "#ffffff",
          className: "my-chart",
          type: this.chartType.toLowerCase(),
        },
        plotOptions: {
          series: {
            cursor: "pointer",
            point: {
              events: {
                click() {
                  ctx.$emit("pointClicked", this);
                },
              },
            },
          },
        },
        yAxis: [
          {
            title: {
              text: this.yAxis,
              style: {
                color: "#000000",
              },
            },
          },
        ],
        xAxis: [
          {
            title: {
              text: "Month",
              style: {
                color: "#000000",
              },
            },
          },
        ],
        title: {
          style: {
            color: this.sexy ? this.invertedColor(0) : "#black",
          },
          text:
            `${this.title} ` +
            (this.lastPointClicked.timestamp !== ""
              ? `(Point clicked: ${this.lastPointClicked.timestamp})`
              : ""),
        },
        subtitle: {
          style: {
            color: this.sexy ? this.invertedColor(0) : "#black",
          },
          text: `${this.subtitle}`,
        },
        legend: {
          itemStyle: {
            color: this.sexy ? this.invertedColor(0) : "#black",
          },
        },
        series: [
          {
            name: this.seriesName,
            data: this.points,
            color: this.seriesColor,
          },
        ],
      };
    },
  },
  methods: {
    getListBooking() {
      this.$axios
        .get(this.$api.BOOKING_GET_ALL)
        .then((res) => {
          this.lstBooking = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataBookings() {
      this.$store.dispatch("bookings/getListBooking");
    },
    getDataShops() {
      this.$store.dispatch("shops/getListShops");
    },
    getDataMovies() {
      this.$store.dispatch("movies/getListMovies");
    },
    getDataProducts() {
      this.$store.dispatch("products/getListProducts");
    },
  },
};
</script>

<style scoped>
.dashboard-section {
  padding: 0 50px;
}

.statistics-box {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-self: center;
}

.statistics-box .statistics-box-item {
  background: #ddd;
  display: flex;
  justify-items: center;
  align-items: flex-end;
  width: 100%;
  margin: 20px 10px;
  padding: 55px 35px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  color: #fff;
}

.statistics-box .statistics-box-item:first-child {
  background: #ec008c;
}

.statistics-box .statistics-box-item:nth-child(2) {
  background: #ed1c24;
}

.statistics-box .statistics-box-item:nth-child(3) {
  background: #fa5511;
}

.statistics-box .statistics-box-item:last-child {
  background: #0ecab6;
}

.statistics-box .statistics-box-item:hover {
}

.statistics-box .statistics-box-item i {
  font-size: 4rem;
  margin-right: 15px;
}

.statistics-box .statistics-box-item h3 {
  font-weight: 700;
}

.statistics-box .statistics-box-item span {
  position: absolute;
  font-size: 2rem;
  top: 20px;
  right: 20px;
  font-weight: 600;
}
</style>