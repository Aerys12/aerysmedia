import { url } from "inspector";
import { MetadataRoute } from "next"; // Import the necessary module or type declaration

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/events`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/headshots`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/headshots/actor`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/headshots/corporate`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/headshots/branding`,
		},

		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/estate`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portraits`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portraits/couple`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portraits/branding`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portraits/kid`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portraits/family`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portraits/newborn`,
		},

		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/birthday`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/showers`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/baptism`,
		},

		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/wedding`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/engagement`,
		},
	];
}
