'use client'
import React from 'react'
import Search from './Search'
import Link from 'next/link'
import Image from 'next/image'
import { SidebarLinks } from '@/constants/Pages'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Sidebar() {
	const pathName = usePathname()

	return (
		<section className='sidebar'>
			<nav className='flex flex-col gap-4'>
				<Link href='/' className='mb-4 cursor-pointer flex items-center gap-2'>
					<Image src='/icons/logo.svg' alt='logo' width={24} height={24}  className="size-[24px] max-xl:size-14" />
					<h1 className='text-black-3 text-2xl ml-1 sidebar-logo'>Banking</h1>
				</Link>
				<Search />
				
				{SidebarLinks.map((item) => {
					const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

					return (
						<Link href={item.route} key={item.label} className={cn('sidebar-link', {
							'bg-bank-gradient': isActive
						})}>
							<div className="relative size-6">
							<Image 
								src={item.imgURL}
								alt={item.label}
								fill
								className={cn({
									'brightness-[3] invert-0': isActive
								})}
								/>
							</div>
							<p className={cn("sidebar-label", { "!text-white": isActive })}>
								{item.label}
							</p>
						</Link>
					)
				})}
				
			</nav>
			{/* <Footer /> */}
		</section>
	)
}
