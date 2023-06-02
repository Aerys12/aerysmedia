import Gallery from "../../components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../db";
import { portraitInfo } from "@/app/types";

export default async function Portrait({ params }: portraitInfo) {
	const images = await getData(params.slug);
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl'>{params.slug} Portraits</h1>
					<p className='text-center'>
						Welcome to my {params.slug} portraits page! I specialize in
						capturing the unique essence of each person I photograph, creating
						images that truly reflect their personality and style. Let us work
						together to tell your story through my lens.
					</p>
				</div>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0'
					>
						BOOK YOUR PORTRAIT SESSION
					</Link>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0'
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
