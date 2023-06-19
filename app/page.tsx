//"use client";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "./components/Testimonials";

export default async function Home() {
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-6xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-2 lg:px-0 lg:flex-row'>
				<div className='text-center'>
					<h1 className='pb-4 text-center  text-4xl md:text-7xl'>
						BEAUTIFUL MOMENTS ARE EVERYTHING
					</h1>
					<div className='flex flex-col items-center justify-between gap-8 lg:flex-row'>
						<div className='flex w-full flex-1 items-center justify-center'>
							<div className='w-full'>
								<Link href={"/portraits"}>
									<Image
										alt='Portrait of a girl'
										className='h-96 w-full object-cover'
										src={
											"https://d2kukao61u3x53.cloudfront.net/home-hero/portraits.jpg"
										}
										width={500}
										height={500}
									/>
									<h1 className='py-6 text-xl'>Portraits</h1>
								</Link>
							</div>
						</div>
						<div className='flex  w-full flex-1 items-center justify-center'>
							<div className='w-full'>
								<Link href={"/headshots"}>
									<Image
										alt='Headshot of a man'
										className='h-96 w-full object-cover'
										src={
											"https://d2kukao61u3x53.cloudfront.net/home-hero/headshots.jpg"
										}
										width={500}
										height={500}
									/>
									<h1 className='py-6 text-xl'>Headshots</h1>
								</Link>
							</div>
						</div>
						<div className='flex w-full flex-1 items-center justify-center '>
							<div className='w-full'>
								<Link href={"/estate"}>
									<Image
										alt='An interior design photo of a couch'
										className='h-96 w-full object-cover'
										src={
											"https://d2kukao61u3x53.cloudfront.net/home-hero/interior.jpg"
										}
										width={500}
										height={500}
									/>
									<h1 className='py-6 text-xl'>Real Estate</h1>
								</Link>
							</div>
						</div>
						<div className='flex w-full flex-1 items-center justify-center'>
							<div className='w-full'>
								<Link href={"/events"}>
									<Image
										alt='Portrait of a married couple'
										className='h-96 w-full object-cover'
										src={
											"https://d2kukao61u3x53.cloudfront.net/home-hero/events.jpg"
										}
										width={500}
										height={500}
									/>
									<h1 className='py-6 text-xl'>Events</h1>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-slate-50 my-4 flex flex-col gap-8 p-2 md:px-2 lg:flex-row lg:p-12'>
				<div className=' relative flex w-full flex-1'>
					<Image
						className='object-cover w-full'
						alt='picture of aerys'
						src={"https://d2kukao61u3x53.cloudfront.net/home-hero/aerys.jpg"}
						width={500}
						height={500}
					></Image>
				</div>
				<div className=' flex flex-1 flex-col items-center justify-center'>
					<h1 className='p-4 text-3xl font-bold'>About</h1>
					<p className='pb-4'>
						Aerys has dedicated his life to capturing the essence of life in all
						its forms. He believes that photography is not just about taking
						pictures, but it is a way of telling stories and expressing
						emotions.
					</p>
					<p className='pb-4'>
						His work ranges from capturing the magnificence of nature to the
						simplicity of everyday life. He aims to transport his clients to the
						moment of the photograph, making them feel the same emotions that
						they did when they took the shot.
					</p>
					<p className='pb-4'>
						With years of experience in photography, He has developed a unique
						style, which focuses on natural light, vibrant colours, and raw
						emotions. He believes that the best moments happen when people are
						at ease and are comfortable being themselves, which is why he
						strives to create a relaxed and friendly environment during his
						photoshoots.
					</p>
					<p className='pb-4'>
						His photography services include portrait photography, event
						photography, Real Estate and Interior photography, and much more. He
						also offers customized packages to cater to your specific needs and
						requirements.
					</p>
					<p>
						He is committed to providing his clients with the highest quality of
						service, and take pride in the fact that his work has been
						recognized and appreciated by many.
					</p>
					<p>
						Thank you for visiting his website, and he hopes that you enjoy
						browsing through his galleries as much as he enjoyed creating them.
						If you have any questions or would like to schedule a photoshoot,
						please do not hesitate to contact.
					</p>
				</div>
			</section>
			<section className='my-4 md:my-10 grid h-1/4 w-full grid-cols-2 gap-2 md:gap-4 lg:gap-12 p-2 lg:grid-cols-4 md:px-2 lg:px-0'>
				<Link
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Couples'
				>
					<div className='flex w-full flex-1'>
						<Image
							src={
								"https://d2kukao61u3x53.cloudfront.net/portraits-hero/couple.jpg"
							}
							className='h-64 w-full object-cover'
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
				</Link>
				<Link
					href='/headshots/LinkedIn'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/headshots-hero/branding.jpg"
							}
							alt='linkedin headshot'
							width={500}
							height={500}
						/>
					</div>
				</Link>
				<Link
					href='/events/engagements'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/events-hero/engagement.jpg"
							}
							alt='an engagement photo'
							width={500}
							height={500}
						/>
					</div>
				</Link>
				<Link
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Family'
				>
					<div className='flex w-full flex-1 object-cover'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/portraits-hero/family.jpg"
							}
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
				</Link>
			</section>
			<section className='bg-slate-50 my-4 flex w-full flex-col py-8 gap-2 overflow-hidden md:px-2 lg:px-4 lg:py-12'>
				<div className='flex flex-col items-center'>
					<h1 className='text-bold pb-6 text-center text-5xl'>Testimonials</h1>
					<Testimonials />
				</div>
			</section>
			<section className='my-4 flex flex-col gap-2 p-2 md:px-8 lg:flex-row lg:px-4'>
				<div className='flex w-full flex-col items-center justify-center gap-24 text-center lg:flex-1'>
					<h1 className='pb-4'>Have any questions or want to book?</h1>
					<h1 className='pb-4 text-3xl'>I would love to help</h1>
					<p className='pb-4'>
						Although Aerys is based in Toronto, he travels all across Canada to
						cities such as Montreal, Vancouver etc for your photo and film needs
					</p>
				</div>
				<div className='mt-4 flex w-full flex-col items-center justify-center px-4 lg:mt-0 lg:flex-1'>
					<h1>Form may go here</h1>
				</div>
			</section>
		</main>
	);
}
