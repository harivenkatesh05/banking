import React from 'react'

interface HeaderBoxProps {
	type?: "title" | "greeting";
	title: string;
	subtitle: string;
	user: string;
}

export default function HeaderBox({type = "title", title, subtitle, user}: HeaderBoxProps) {
	return (
		<div className='header'>
			<h1 className='header-1'>
				{title}
				{type === "greeting" && (<span>&nbsp;{user}</span>)}
			</h1>
			<p className='light-text'>{subtitle}</p>
		</div>
	)
}
