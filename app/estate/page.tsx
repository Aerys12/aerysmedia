import Link from "next/link";
import Gallery from "../components/Gallery";
import { prisma } from "../db";

export default async function Estate() {
	const images = await getData();

	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<div className='flex flex-col items-center justify-center px-2 pb-4 md:px-8'>
				<h1 className='p-4 text-4xl'>Real Estate and Interior Photography</h1>
				<p className='text-center'>
					Welcome to my real estate and interior photography page! I have a
					passion for showcasing properties in their best light. Whether you are
					a real estate agent or homeowner, I can provide stunning images that
					will make your property stand out. Let us work together to create
					images that will make your space shine.
				</p>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0'
					>
						BOOK YOUR SESSION
					</Link>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0'
					>
						EMAIL US A QUESTION
					</Link>
				</div>
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
