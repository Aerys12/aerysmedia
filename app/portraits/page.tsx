import Gallery from "../components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../db";

export default async function Portraits() {
	const images = await getData();
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<div className='flex flex-col items-center justify-center px-2 pb-4 md:px-8'>
				<h1 className='p-4 text-4xl'>Portrait Photography</h1>
				<p className='text-center'>
					Welcome to my portrait photography page! I specialize in capturing the
					unique essence of each person I photograph, creating images that truly
					reflect their personality and style. Let us work together to tell your
					story through my lens.
				</p>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						BOOK YOUR PORTRAIT SESSION
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
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Couples'
				>
					<div className='flex h-64 w-full'>
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
					<h1 className='py-6 text-xl'>Couples</h1>
				</Link>
				<Link
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Branding'
				>
					<div className='flex h-64 w-full flex-1 object-cover '>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/portraits-hero/branding.jpg"
							}
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Branding</h1>
				</Link>
				<Link
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Kids'
				>
					<div className='flex w-full flex-1 object-cover '>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/portraits-hero/kid.jpg"
							}
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Kids</h1>
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
					<h1 className='py-6 text-xl'>Family</h1>
				</Link>
				<Link
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Maternity'
				>
					<div className='flex w-full flex-1 object-cover'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/portraits-hero/maternity.jpg"
							}
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Maternity</h1>
				</Link>
				<Link
					className='flex w-full flex-col items-center justify-center'
					href='/portraits/Newborn'
				>
					<div className='flex w-full flex-1 object-cover'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/portraits-hero/newborn.jpg"
							}
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Newborn</h1>
				</Link>
			</section>
			<section className='flex w-full flex-col items-center'>
				<h1 className='py-6 text-5xl'>Gallery</h1>
				<Gallery images={images} />
			</section>
		</main>
	);
}

async function getData() {
	const images = await prisma?.image.findMany({
		where: {
			galleryName: "portraits",
		},
	});

	return images;
}
