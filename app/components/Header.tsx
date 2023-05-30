"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import logo from "../../public/logo.png";

export default function Header() {
	const [mobileNav, setMobileNav] = useState(false);

	const handleClick = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<div className='z-9999 relative w-full bg-white px-4 py-2 drop-shadow-md md:px-8 md:py-4'>
			{/* mobile nav */}
			<div className='flex items-center justify-between lg:hidden'>
				<div className='flex items-center bg-white'>
					<Link href='/'>
						<Image alt='logo' className='w-24 h-24 md:h-32 md:w-32 object-cover' src={logo} />
					</Link>
				</div>
				{/* primary mobile nav */}
				<div className='flex items-center gap-4'>
					<div>
						<button className='bg-black px-2 py-1 text-white'>
							<Link href='/contact'>Book Now</Link>
						</button>
					</div>
					<div
						onClick={handleClick}
						className='z-50 flex items-center lg:hidden'
					>
						{!mobileNav ? <FaAlignRight size={25} /> : <FaTimes size={25} />}
					</div>
				</div>
			</div>

			{/* normal nav */}
			<div className='mx-auto hidden max-w-7xl justify-between lg:flex'>
				<div className='flex items-center justify-center'>
					<Link href='/'>
						<Image alt='logo' className='h-32 w-32 object-cover' src={logo} />
					</Link>
				</div>

				{/* primary nav */}
				<div className='w-1/2 min-w-fit items-center justify-between gap-2 lg:flex'>
					<Link href='/' className='block'>
						Home
					</Link>
					<Link href='/portraits' className='block'>
						Portraits
					</Link>
					<Link href='/headshots' className='block'>
						Headshots
					</Link>
					<Link href='/estate' className='block'>
						Real Estate & Interior
					</Link>
					<Link href='/events' className='block'>
						Events
					</Link>
					<Link href='/rates' className='block'>
						Rates
					</Link>
				</div>
				{/* secondary nav */}
				<div className='flex items-center'>
					<Link href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0' className='block bg-black px-4 py-2 text-white'>
						Book Now
					</Link>
				</div>
			</div>
			{/*mobile menu */}
			<div
				className={
					!mobileNav
						? "fixed left-0 top-[-1500%] z-auto  flex h-screen w-full items-center justify-center duration-500 ease-in"
						: "fixed left-0 top-0 z-auto flex h-screen w-full items-center justify-center bg-white duration-500 ease-in lg:hidden"
				}
			>
				<ul className='flex flex-col text-center text-2xl'>
					<Link onClick={handleClick} className='p-4' href='/'>
						Home
					</Link>
					<Link onClick={handleClick} className='p-4' href='/portraits'>
						Portraits
					</Link>
					<Link onClick={handleClick} className='p-4' href='/headshots'>
						Headshots
					</Link>
					<Link onClick={handleClick} className='p-4' href='/estate'>
						Real Estate & Interior
					</Link>
					<Link onClick={handleClick} className='p-4' href='/events'>
						Events
					</Link>
					<Link onClick={handleClick} className='p-4' href='/rates'>
						Rates
					</Link>
				</ul>
			</div>
		</div>
	);
}
