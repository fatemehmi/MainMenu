import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	PointElement,
} from "chart.js";
// import { chartdata, options } from "../../Data/data";

ChartJS.register(LineElement, CategoryScale, PointElement);

const Linechart = () => {
	const data = {
		labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
		datasets: [
			{
				data: [0, 5000, 10000, 15000, 20000, 25000],
				backgroundColor: "transparent",
				borderColor: "#f26c6d",
				pointBorderColor: "transparent",
				pointerborderWidth: 4,
				tension: 0.5,
			},
		],
	};
	return (
		<Line
			data={data}
			// options={options}
		/>
	);
};

export default Linechart;
