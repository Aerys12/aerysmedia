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

export type headshotInfo = {
	params: {
		slug: string
	}
}

export type eventsInfo = {
	params: {
		slug: string
	}
}
