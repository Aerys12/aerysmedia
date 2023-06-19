import Gallery from "../../components/Gallery";
import Link from "next/link";
import { prisma } from "../../db";
import BookNow from "@/app/components/BookNow";

export default async function Engagements() {
	const images = await getData();
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl text-center'>Engagement Events</h1>
					<p className='text-center'>
						As an engagement photographer, I capture the joy and intimacy of
						this special moment with natural shots that reflect your
						personalities and style. Let me help you preserve your love story.
					</p>
				</div>
				<BookNow />
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
