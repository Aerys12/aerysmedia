import Link from "next/link";

export default function Footer() {
	return (
		<footer className='flex flex-col text-center items-center justify-center p-2 border-t-2 w-full lg:p-10'>
			<ul className='flex justify-between w-full text-xs gap-2 md:gap-8 md:text-lg md:w-4/5 md:max-w-7xl md:mx-auto '>
				<Link className='pb-2' href='/'>
					Home
				</Link>
				<Link className='pb-2' href='/portraits'>
					Portraits
				</Link>
				<Link className='pb-2' href='/headshots'>
					Headshots
				</Link>
				<Link className='pb-2' href='/estate'>
					Real Estate & Interior
				</Link>
				<Link className='pb-2' href='/events'>
					Events
				</Link>
				<Link className='pb-2' href='/rates'>
					Rates
				</Link>
			</ul>
			<p className='text-center text-xs p-2 text-gray-500'>
				Copyright © 2023 Aerys Media. All rights reserved
			</p>
		</footer>
	);
}
