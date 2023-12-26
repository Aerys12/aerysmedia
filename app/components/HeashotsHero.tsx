import { TbArrowBigRightLines } from "react-icons/tb";
import { prisma } from "../db";
import Gallery from "./Gallery";

export default async function HeadshotsHero() {
	const images = await getData();
	return (
		<div className='flex flex-col bg-slate-200 mt-24'>
			<div className='relative -top-14 flex ml-auto items-end justify-end w-1/4 bg-black text-white px-2 py-4 mb-4'>
				<div className='text-4xl text-end'>
					<h1>HEADSHOT</h1>
					<h1 className='font-extralight'>Photography</h1>
				</div>
			</div>
			<div className='w-1/2 mr-auto flex flex-col items-start justify-start text-left py-4'>
				<p>
					Professional and polished, our headshots are designed to create a
					striking first impression, ideal for enhancing personal brands,
					corporate profiles, or creative portfolios.
				</p>
				<button className='bg-black text-white py-2 px-4 my-4'>
					MORE HEADSHOT PHOTOGRAPHY
				</button>
			</div>
			<div>
				<Gallery images={images} />
			</div>
			<div className='flex items-center justify-center gap-4 text-center text-3xl'>
				<h1>View more Headshots</h1> <TbArrowBigRightLines />
			</div>
		</div>
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
