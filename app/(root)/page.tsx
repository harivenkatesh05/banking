import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

export default async function page() {
	const loggedInUser = await getLoggedInUser();
	const accountsData: Account[] = [
		{
			id: '1',
			name: 'Bank 1',
			currentBalance: 1000,
			mask: '1234'
		},
		{
			id: '2',
			name: 'Bank 2',
			currentBalance: 2000,
			mask: '1234'
		}
	]

	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						subtitle='Access & manage your account and transactions efficiently.'
						user={loggedInUser?.firstName ?? "Guest"}
					/>
					<TotalBalanceBox 
						accounts={[
							{
								balance: 1000,
								name: 'Bank 1'
							},
							{
								balance: 2000,
								name: 'Bank 2'
							}
						]}
					/>
				</header>
			</div>
			
			<RightSidebar
				user={loggedInUser}
				accounts={accountsData?.slice(0, 2)}
			/>
		</section>
	)
}
