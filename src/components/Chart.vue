<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  name: "Chart",
  props: {
    chartdata: {
      type: Object,
      default: null,
      labels: [
        "Sport",
        "Education",
        "Internet",
        "Food",
        "Transport",
        "Entertainmen",
      ],
      datasets: [
        {
          label: "Costs by categories",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      type: Object,
      default: null,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
  data: () => ({
    //
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
