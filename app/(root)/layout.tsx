import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Image from 'next/image'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function layout ({ children }: { children: React.ReactNode }) {
	const loggedIn = await getLoggedInUser();

  	if(!loggedIn) redirect('/sign-in')

	return (
		<main className='flex'>
			<Sidebar user={loggedIn}/>

			<div className='flex flex-col size-full'>
				<div className="root-layout">
					<Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
					<div>
						<MobileNav />
					</div>
				</div>
				{children}
			</div>
		</main>
	)
}
