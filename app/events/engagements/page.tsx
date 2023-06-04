import Gallery from "../../components/Gallery";
import Link from "next/link";
import { prisma } from "../../db";

export default async function Engagements() {
	const images = await getData();
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl'>Engagement Events</h1>
					<p className='text-center'>
						As an engagement photographer, I capture the joy and intimacy of
						this special moment with natural shots that reflect your
						personalities and style. Let me help you preserve your love story.
					</p>
				</div>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						BOOK YOUR EVENT
					</Link>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						EMAIL US A QUESTION
					</Link>
				</div>
			</section>

			<section className='my-4 flex flex-col gap-2 p-2 md:px-8 lg:px-4'>
				<Gallery images={images} />
			</section>
		</main>
	);
}

async function getData() {
	const images = await prisma?.image.findMany({
		where: {
			galleryName: "engagements",
		},
	});

	return images;
}
