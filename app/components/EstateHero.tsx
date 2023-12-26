import { TbArrowBigRightLines } from "react-icons/tb";
import { prisma } from "../db";
import Gallery from "./Gallery";

export default async function EstateHero() {
	const images = await getData();
	return (
		<div className='flex flex-col bg-slate-200 mt-24'>
			<div className='relative -top-14 flex w-1/2 bg-black text-white px-2 py-4 mb-4'>
				<div className='text-4xl text-start'>
					<h1>REAL ESTATE AND INTERIOR</h1>
					<h1 className='text-left font-extralight'>Photography</h1>
				</div>
			</div>
			<div className='w-1/2 ml-auto flex flex-col items-end justify-end text-left my-2'>
				<p>
					Showcasing properties in their finest light, our real estate and
					interior photography highlights the elegance and unique features of
					each space, perfect for realtors, architects, and designers.
				</p>
				<button className='bg-black text-white py-2 px-4 my-4'>
					MORE ESTATE PHOTOGRAPHY
				</button>
			</div>
			<div>
				<Gallery images={images} />
			</div>
			<div className='flex items-center justify-center gap-4 text-center text-3xl'>
				<h1>View more real estate</h1> <TbArrowBigRightLines />
			</div>
		</div>
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
