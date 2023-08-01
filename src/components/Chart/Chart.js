import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataChart) => (
        <ChartBar
          key={dataChart.label}
          value={dataChart.value}
          maxValue={totalMaximum}
          label={dataChart.label}
        />
      ))}
    </div>
  );
};
export default Chart;
