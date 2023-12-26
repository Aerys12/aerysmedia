"use client";
import Image from "next/image";
import { GalleryProps } from "../types";
import { useState } from "react";
import cn from "classnames";

export default function Gallery({ images }: GalleryProps) {
	const [isLoading, setLoading] = useState(true);
	return (
		<div className='w-full columns-1 gap-1 space-y-1 px-2 md:columns-2 md:px-8 lg:px-0 lg:columns-3'>
			{images?.map((image) => (
				<div
					key={image.name}
					className='relative break-inside-avoid overflow-hidden'
				>
					<Image
						src={`https://${image.imageUrl}`}
						alt={image.alt}
						width={500}
						height={500}
						className={cn(
							"z-1 object-contain  transition-all hover:scale-125 duration-500",
							isLoading
								? "grayscale blur-2xl scale-110"
								: "grayscale-0 blur-0 scale-100"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
			))}
		</div>
	);
}
