import Gallery from "../../components/Gallery";
import { headshotInfo } from "@/app/types";
import Link from "next/link";
import { prisma } from "../../db";

export default async function Headshot({ params }: headshotInfo) {
	const images = await getData(params.slug);
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl'>{params.slug} Headshots</h1>
					<p className='text-center'>
						Welcome to my {params.slug} Headshots page! I specialize in creating
						headshots that showcase your unique personality and professionalism
						for a variety of purposes, including LinkedIn, personal branding,
						and more. Whether you are an actor, entrepreneur, or working
						professional, I work closely with you to create headshots that
						capture your individuality and make you stand out from the crowd.
						Let us work together to create images that will help you achieve your
						goals
					</p>
				</div>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/contact'
					>
						BOOK YOUR HEADSHOT SESSION
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

async function getData(slug: String) {
	const gallery = slug.toLocaleLowerCase();
	const images = await prisma?.image.findMany({
		where: {
			galleryName: gallery,
		},
	});

	return images;
}
