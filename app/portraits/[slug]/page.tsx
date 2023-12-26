import Gallery from "../../components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../db";
import { portraitInfo } from "@/app/types";
import BookNow from "@/app/components/BookNow";
import type { Metadata } from "next";

export async function generateMetadata({ params }: portraitInfo): Promise<Metadata> {
	return {
		title: `${params.slug} Portraits`
	}
}

export default async function Portrait({ params }: portraitInfo) {
	const images = await getData(params.slug);
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<section className='my-4 flex flex-col gap-8 p-2 md:px-8 lg:px-4'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<h1 className='p-4 text-4xl text-center'>{params.slug} Portraits</h1>
					<p className='text-center'>
						Welcome to my {params.slug} portraits page! I specialize in
						capturing the unique essence of each person I photograph, creating
						images that truly reflect their personality and style. Let us work
						together to tell your story through my lens.
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

async function getData(slug: String) {
	const gallery = slug.toLocaleLowerCase();
	const images = await prisma?.image.findMany({
		where: {
			galleryName: gallery,
		},
	});

	return images;
}
