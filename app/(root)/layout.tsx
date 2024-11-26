import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'

export default function layout ({ children }: { children: React.ReactNode }) {
	return (
		<main className='flex'>
			<Sidebar />

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
