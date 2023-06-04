import Gallery from "../../components/Gallery";
import { eventsInfo } from "@/app/types";
import Link from "next/link";
import { prisma } from "../../db";

export default async function Event({ params }: eventsInfo) {
	const images = await getData(params.slug);
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl'>{params.slug} Events</h1>
					<p className='text-center'>
						Welcome to my {params.slug} events page! I specialize in capturing
						the essence and excitement of every event I photograph. From
						corporate events to weddings and everything in between, I am
						committed to providing high-quality images that will make your
						memories last a lifetime.
					</p>
				</div>
			</section>
			<section className='my-4 flex flex-col gap-2 p-2 md:px-8 lg:px-4'>
				<Gallery images={images} />
			</section>
		</main>
	);
}

async function getData(slug: String) {
	const gallery = slug.toLocaleLowerCase();
	const images = await prisma?.image.findMany({
		where: {
			galleryName: gallery,
		},
	});

	return images;
}
