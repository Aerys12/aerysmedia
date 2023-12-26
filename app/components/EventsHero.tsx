import { TbArrowBigRightLines } from "react-icons/tb";
import { prisma } from "../db";
import Gallery from "./Gallery";

export default async function EventsHero() {
	const images = await getData();
	return (
		<div className='flex flex-col bg-slate-50 mt-24'>
			<div className='relative -top-14 flex ml-auto items-end justify-end w-1/4 bg-black text-white px-2 py-4 mb-4'>
				<div className='text-4xl text-end'>
					<h1>EVENTS</h1>
					<h1 className='font-extralight'>Photography</h1>
				</div>
			</div>
			<div className='w-1/2 mr-auto flex flex-col items-start justify-start text-left my-2'>
				<p>
					Our event photography captures the magic and emotion of your special
					occasions, from candid moments to grand celebrations, creating a
					lasting visual narrative of your memorable events.
				</p>
				<button className='bg-black text-white py-2 px-4 my-4'>
					MORE EVENTS PHOTOGRAPHY
				</button>
			</div>
			<div>
				<Gallery images={images} />
			</div>
			<div className='flex items-center justify-center gap-4 text-center text-3xl'>
				<h1>View more Events</h1> <TbArrowBigRightLines />
			</div>
		</div>
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
