import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(request) {
    const topics = await prisma.topic.findMany({
        include:{
            sub_topic: true
        }
    });
    return NextResponse.json({topics}, { status: 201 })

}
export async function POST(request) {
    const body = await request.json();
    if (body.type == 'topic') {
        const { title, name } = body;
        const topic = await prisma.topic.create({
            data: {
                title,
                name,
            },
        });
        return NextResponse.json(topic, { status: 201 });
    } else {
        const { topicId, title, name } = body;
        const topic = await prisma.sub_Topic.create({
            data: {
                title,
                name,
                topicId
            },
        });
        return NextResponse.json(topic, { status: 201 });

    }
}
export async function PUT(request) {
    const body = await request.json();
    if (body.type == 'topic') {
        const { id,title, name } = body;
        const topic = await prisma.topic.update({
            where: {
                id: Number(id)
            },
            data: {
                title,
                name,
            },
        });
        return NextResponse.json(topic, { status: 201 });
    } else {
        const { id,topicId, title, name } = body;
        const topic = await prisma.sub_Topic.update({
            where: {
                id: Number(id)
            },
            data: {
                title,
                name,
                topicId
            },
        });
        return NextResponse.json(topic, { status: 201 });

    }
}
