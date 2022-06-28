import Chart from "react-apexcharts";
import styles from "./ExpensePieChart.module.css";

function ExpensePieChart({ categoriesTypes, totalPrices }) {
  return (
    <div>
      <Chart
        options={{
          title: { text: "Expense chart" },
          labels: [...categoriesTypes],
        }}
        series={totalPrices}
        type="pie"
        width="380"
      />
    </div>
  );
}

export default ExpensePieChart;
