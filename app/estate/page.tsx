import Link from "next/link";
import Gallery from "../components/Gallery";
import { prisma } from "../db";
import BookNow from "../components/BookNow";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Real Estate and Interior Design Photography"

}

export default async function Estate() {
	const images = await getData();

	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<div className='flex flex-col items-center justify-center px-2 pb-4 md:px-8'>
				<h1 className='p-4 text-4xl text-center'>Real Estate and Interior Photography</h1>
				<p className='text-center'>
					Welcome to my real estate and interior photography page! I have a
					passion for showcasing properties in their best light. Whether you are
					a real estate agent or homeowner, I can provide stunning images that
					will make your property stand out. Let us work together to create
					images that will make your space shine.
				</p>
				<BookNow />
			</div>

			<section>
				<Gallery images={images} />
			</section>
		</main>
	);
}

async function getData() {
	const images = await prisma?.image.findMany({
		where: {
			galleryName: "interior",
		},
	});

	return images;
}
