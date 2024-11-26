'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({accounts}: {accounts: {balance: number, name: string}[]}) {

	const data = {
		datasets: [
		  {
			label: 'Banks',
			data: accounts.map((account) => account.balance),
			backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
		  }
		],
		labels: accounts.map((account) => account.name)
	}

	return (
		<Doughnut 
			data={data} 
			options={{
				cutout: '60%',
				plugins: {
				  legend: {
					display: false
				  }
				}
			}}
		/>
	)
}
