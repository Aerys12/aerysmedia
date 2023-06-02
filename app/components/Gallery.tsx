import Image from "next/image";
import { GalleryProps, GalleryImage } from "../types";

export default function Gallery({ images }: GalleryProps) {
	return (
		<div className='w-full columns-1 gap-1 space-y-1 px-2 md:columns-2 md:px-8 lg:columns-3'>
			{images?.map((image) => (
				<div
					key={image.name}
					className='relative break-inside-avoid overflow-hidden'
				>
					<Image
						className='z-1 object-contain  transition-all hover:scale-125 duration-500'
						src={`https://${image.imageUrl}`}
						alt={image.alt}
						width={500}
						height={500}
					/>
				</div>
			))}
		</div>
	);
}
