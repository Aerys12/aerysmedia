import Gallery from "../../components/Gallery";
import Link from "next/link";
import { prisma } from "../../db";

export default async function Weddings() {
	const images = await getData();
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl'>Wedding Events</h1>
					<p className='text-center'>
						As a wedding photographer, I capture the unique story of each couple
						through natural and timeless shots. Let me help you cherish your
						memories forever.
					</p>
				</div>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						BOOK YOUR WEDDING
					</Link>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						EMAIL US A QUESTION
					</Link>
				</div>
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
			galleryName: "weddings",
		},
	});

	return images;
}
