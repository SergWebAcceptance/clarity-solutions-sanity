import { CACHE_TAG_REVIEWS } from "@/lib/insights";
import { revalidateTag } from "next/cache";

export async function POST(request) {
    const payload = await request.json();
    console.log('payload:', payload);
    if(payload) {
        revalidateTag(CACHE_TAG_REVIEWS);
        console.log(`${CACHE_TAG_REVIEWS} tag revalidated`);
    }
    return new Response(null, { status: 204 })
}