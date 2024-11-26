import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

interface TotalBalanceBoxProps {
	accounts: {
		balance: number
		name: string
	}[]
}

export default function TotalBalanceBox({accounts}: TotalBalanceBoxProps) {
	return (
		<div className='border mt-4 rounded-lg shadow-sm flex'>
			<div className='max-w-40 m-4'>
				<DoughnutChart accounts={accounts} />
			</div>
			<div className='p-4 flex flex-col gap-7'>
				<div className='flex justify-between items-center'>
					<h2 className='header-2'>{accounts.length} Bank Accounts</h2>
					<button className='header-2 text-blue-600'>+ Add Bank</button>
				</div>
				<div className='flex flex-col gap-2'>
					<p className='light-text'>Total Current Balance</p>
					<AnimatedCounter amount={accounts.reduce((total, account) => total + account.balance, 0)}/>
				</div>
			</div>
		</div>
	)
}
