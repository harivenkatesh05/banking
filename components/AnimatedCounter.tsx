"use client"

import React from 'react'
import CountUp from 'react-countup'

export default function AnimatedCounter({amount}: {amount: number}) {
	return (
		<CountUp 
			className='header-1'
			prefix='$'
			end={amount}
		/>
	)
}
