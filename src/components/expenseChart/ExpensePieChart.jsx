import Chart from "react-apexcharts";
// import styles from "./ExpensePieChart.module.css";

function ExpensePieChart({ categoriesTypes, totalPrices }) {
  let options = {
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 20,
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
    colors: ["#c01104", "#900175", "#00177c", "#027d11", "#f94504"],
    fill: {
      colors: ["#c01104", "#900175", "#00177c", "#027d11", "#f94504"],
    },
    legend: {
      show: true,
      position: "bottom",
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        colors: ["white"],
      },

      dropShadow: {
        enabled: false,
        left: 0,
        top: 0,
        opacity: 0,
      },
    },
    // title: { text: "Expense chart", horizontalAlign: "right" },
    labels: [...categoriesTypes],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 300,
              color: undefined,
              offsetY: -8,
              formatter: function (val) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "red",
              offsetY: 10,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: false,
              label: "Total",
              fontSize: "18px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 500,
              color: "#373d3f",
              formatter: function (w) {
                let total = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return parseFloat(total).toFixed(2);
              },
            },
          },
        },
      },
    },
  };
  return (
    <div>
      <Chart options={options} series={totalPrices} type="donut" width="380" />
    </div>
  );
}

export default ExpensePieChart;
