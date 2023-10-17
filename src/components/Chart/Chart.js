import React from "react";
import "./ChartBar.css";
import './Chart.css'

const CharBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="char-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

const Chart = (props) => {
  
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        ></CharBar>
      ))}
    </div>
  );
};

const ExpensesChart = props => {
  
  const chartDataPoints = [
    { label:'Jan', value: 0 },
    { label:'Feb', value: 0 },
    { label:'Mar', value: 0 },
    { label:'Apr', value: 0 },
    { label:'May', value: 0 },
    { label:'Jun', value: 0 },
    { label:'Jul', value: 0 },
    { label:'Aug', value: 0 },
    { label:'Sep', value: 0 },
    { label:'Oct', value: 0 },
    { label:'Nov', value: 0 },
    { label:'Dec', value: 0 },
  ];
  
  for (const expense of props.expenses) {
    console.log(expense.date.getMonth());
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  
  return <Chart dataPoints={chartDataPoints}></Chart>
  
}

export default ExpensesChart;
