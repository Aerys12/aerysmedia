import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getImageFiles } from "@/lib/getImageFiles";
import { prisma } from "../../../db";

const images = getImageFiles("newborn").slice(1);

export async function POST(request: Request) {
	//await client?.gallery.deleteMany();

	for (const image of images) {
		const updatedGallery = await prisma.gallery.update({
			where: {
				category: "newborn",
			},
			data: {
				images: {
					create: {
						alt: "a picture of a newborn",
						name: image,
						imageUrl: `d2kukao61u3x53.cloudfront.net/newborn/${image}`,
						galleryName: "newborn",
					},
				},
			},
		});
	}

	return NextResponse.json({ msg: "sent newborn data to prisma" });
}
