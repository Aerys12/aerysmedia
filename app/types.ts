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
		description: string
    }
};

export type headshotInfo = {
	params: {
		slug: string
		description: string
	}
}

export type eventsInfo = {
	params: {
		slug: string
		description: string
	}
}
