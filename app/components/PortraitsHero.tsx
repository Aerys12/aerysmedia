import { TbArrowBigRightLines } from "react-icons/tb";
import { prisma } from "../db";
import Gallery from "./Gallery";

export default async function PortraitsHero() {
	const images = await getData();
	return (
		<div className='flex flex-col bg-slate-200 mt-24'>
			<div className='relative -top-14 flex w-1/4 bg-black text-white px-2 py-4 mb-4'>
				<div className='text-4xl'>
					<h1>PORTRAIT</h1>
					<h1 className='font-extralight'>Photography</h1>
				</div>
			</div>
			<div className='w-1/2 ml-auto flex flex-col items-end justify-end text-left py-4'>
				<p>
					Capturing the essence of each individual, our portrait photography
					reveals the unique story and personality behind every face. These
					images are perfect for personal keepsakes or professional profiles
				</p>
				<button className='bg-black text-white py-2 px-4 my-4'>
					MORE PORTRAIT PHOTOGRAPHY
				</button>
			</div>
			<div>
				<Gallery images={images} />
			</div>
			<div className='flex items-center justify-center gap-4 text-center text-3xl'>
				<h1>View more portraits</h1> <TbArrowBigRightLines />
			</div>
		</div>
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
