import Gallery from "../components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../db";
import BookNow from "../components/BookNow";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events Photography"

}

export default async function Events() {
	const images = await getData();
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<div className='flex flex-col items-center justify-center px-2 pb-4 md:px-8'>
				<h1 className='p-4 text-4xl text-center'>Events Photography</h1>
				<p className='text-center'>
					Welcome to my events photography page! I specialize in capturing the
					essence and excitement of every event I photograph. From corporate
					events to weddings and everything in between, I am committed to
					providing high-quality images that will make your memories last a
					lifetime.
				</p>
				<BookNow />
			</div>
			<section className='mb-10 grid h-1/4 w-full grid-cols-1 gap-12 p-2 md:grid-cols-3 md:px-8'>
				<Link
					href='/events/weddings'
					className='flex w-full flex-col items-center justify-center'
				>
					<div className='flex w-full'>
						<Image
							src={
								"https://d2kukao61u3x53.cloudfront.net/events-hero/wedding.jpg"
							}
							className='h-64 w-full object-cover'
							alt='a wedding photo'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Weddings</h1>
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
					<h1 className='py-6 text-xl'>Engagements</h1>
				</Link>
				<Link
					href='/events/Baptisms'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1 object-cover '>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/events-hero/baptism.jpg"
							}
							alt='this is a portrait'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Baptisms</h1>
				</Link>
				<Link
					href='/events/Birthdays'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1 object-cover'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/events-hero/birthday.jpg"
							}
							alt='a birthday photo'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Birthdays</h1>
				</Link>
				<Link
					href='/events/Showers'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1 object-cover'>
						<Image
							className='h-64 w-full object-cover'
							src={
								"https://d2kukao61u3x53.cloudfront.net/events-hero/showers.jpg"
							}
							alt='a baby shower photo'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Baby Showers</h1>
				</Link>
				<Link
					href='/events/Corporate-event'
					className='flex flex-col items-center justify-center'
				>
					<div className='flex w-full flex-1 object-cover'>
						<Image
							className='h-64 w-full object-cover'
							src={"https://d2kukao61u3x53.cloudfront.net/events-hero/corp.jpg"}
							alt='a corporate event photo'
							width={500}
							height={500}
						/>
					</div>
					<h1 className='py-6 text-xl'>Corporate Events</h1>
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
			galleryName: "events",
		},
	});

	return images;
}
