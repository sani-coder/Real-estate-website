import React from "react";
import { Bar } from "react-chartjs-2";
/**
 * The function creates an array of unique categories from an array of objects with a "category"
 * property.
 */

const BarGraph = ({ properties }) => {
  const categoryArray = [
    ...new Set(properties.map((property) => property.category)),
  ];/* This code is creating an array called `count` that contains the count of properties for each
  unique category. */
  
  const count = Object.values(
    properties
      .map((property) => property.category)
      .reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
  );

  /* `const state` is an object that contains the data and configuration options for the Bar chart. It
  has two properties: `labels` and `datasets`. */
  const state = {
    labels: categoryArray,
    datasets: [
      {
        label: "Properties by Category",
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
        data: count,
      },
    ],
  };
/* This code is creating a configuration object called `options` that contains options for the Bar
chart. It has two properties: `title` and `legend`. The `title` property specifies the title of the
chart, its font size, and whether it should be displayed. The `legend` property specifies whether
the legend should be displayed and its position on the chart. The `options` object is then passed as
a prop to the `Bar` component along with the `state` object, which contains the data for the chart. */

  const options = {
    title: {
      display: true,
      text: "Property by category",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "left",
    },
  };
  return <Bar data={state} options={options} />;
};

export default BarGraph;
