import { NextRequest, NextResponse } from "next/server";
import { getImageFiles } from "@/lib/getImageFiles";
import { prisma } from "../../../db";

const images = getImageFiles("headshots").slice(1);

export async function POST(request: Request) {
    //await client?.gallery.deleteMany();

    for (const image of images) {
        const updatedGallery = await prisma.gallery.update({
            where: {
                category: "headshots",
            },
            data: {
                images: {
                    create: {
                        alt: "a headshot of a person",
                        name: image,
                        imageUrl: `d2kukao61u3x53.cloudfront.net/headshots/${image}`,
                        galleryName: "headshots",
                    },
                },
            },
        });
    }

    return NextResponse.json({ msg: "sent headshots data to prisma" });
}
