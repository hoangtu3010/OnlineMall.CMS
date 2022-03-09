<template>
  <div class="dashboard-section row">
    <highchart
      :options="chartOptions"
      :modules="['exporting']"
      :update="watchers"
      style="width: 100%"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: "Chart caption here",
      title: "Cinema sales statistics chart",
      subtitle: "2022",
      points: [0, 8, 2, 6, 4, 5, 5, 7, 9, 10, 15, 13],
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
    this.getDataBookings();
    console.log(this.listDataBooking, 'data booking');
  },
  computed: {
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
              categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
    listDataBooking() {
      return this.$store.state.bookings.listBooking;
    },
  },
  methods: {
    getDataBookings() {
      this.$store.dispatch("bookings/getListBooking");
    },
  },
};
</script>

<style scoped>
.dashboard-section {
  padding: 0 50px;
}
</style>