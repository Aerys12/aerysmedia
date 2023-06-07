import Gallery from "../components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../db";

export default async function Headshots() {
	const images = await getData();

	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<div className='flex flex-col items-center justify-center px-2 pb-4 md:px-8'>
				<h1 className='p-4 text-4xl text-center'>Headshot Photography</h1>
				<p className='text-center'>
					Welcome to my headshots photography page! I specialize in creating
					headshots that showcase your unique personality and professionalism
					for a variety of purposes, including LinkedIn, personal branding, and
					more. Whether you are an actor, entrepreneur, or working professional,
					I work closely with you to create headshots that capture your
					individuality and make you stand out from the crowd. Let us work
					together to create images that will help you achieve your goals
				</p>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						BOOK YOUR SESSION
					</Link>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						EMAIL US A QUESTION
					</Link>
				</div>
			</div>
			<section className='mb-10 grid h-1/4 w-full grid-cols-1 gap-12 p-2 md:grid-cols-3 md:px-8'>
				<Link
					href='/headshots/Actors'
					className='flex w-full flex-col items-center justify-center'
				>
					<div className='flex w-full'>
						<Image
							src={
								"https://d2kukao61u3x53.cloudfront.net/headshots-hero/actor.jpg"
							}
							className='h-64 w-full object-cover'
							alt='actors headshot'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Actors</h1>
				</Link>
				<Link
					href='/headshots/Corporate'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/headshots-hero/corporate.jpg"
							}
							alt='corporate headshot'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Corporate</h1>
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
					<h1 className='py-6 text-xl'>LinkedIn</h1>
				</Link>
			</section>

			<section>
				<Gallery images={images} />
			</section>
		</main>
	);
}

async function getData() {
	const images = await prisma?.image.findMany({
		where: {
			galleryName: "headshots",
		},
	});

	return images;
}
