export type GalleryProps = {
	images: GalleryImage[];
};

export type GalleryImage = {
	name: string;
	alt: string;
	imageUrl: string;
};

export type portraitInfo = {
	params: {
        slug: string
    }
};
