import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Redis instance
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Ratelimit: 2 requests per minute
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, "1 m"),
});

export async function POST(request: NextRequest, response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1";

  const result = await ratelimit.limit(ip);

  if (!result.success) {
    return NextResponse.json(
      { error: "Too many requests!!" },
      { status: 429 }
    );
  }

  const { email, firstname } = await request.json();

  // Hozircha email jo‘natish o‘chirildi, faqat log chiqariladi yoki boshqa ish qilishingiz mumkin
  console.log("Received email submission:", { email, firstname });

  // Istasangiz, bu yerda faqat muvaffaqiyatli javob qaytariladi
  return NextResponse.json({ message: "Request received successfully (email not sent)." });
}
