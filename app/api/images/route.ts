import { NextRequest, NextResponse } from "next/server";
import { getImageFiles } from "@/lib/getImageFiles";
import { prisma } from "../../db";

const images = getImageFiles('portraits').slice(0);

export async function POST(request: Request) {
    

    {
        /* <Image
    }for (const image of images) {
        const updatedGallery = await prisma.gallery.update({
            where: {
                category: 'portraits',
            },
            data: {
                images: {
                    create: {
                        alt: "a portrait of a person",
                        name: image,
                        imageUrl: `d2kukao61u3x53.cloudfront.net/portraits/${image}`,
                        galleryName: 'portraits',
                    },
                },
            },
        });
    } */}

    return NextResponse.json({ msg: "sent portraits data to prisma" });
}