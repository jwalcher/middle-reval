import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api).*)"],
};

export default function middleware(request) {
  const rewritePath = "/time"
  const rewriteUrl = new URL(rewritePath, request.nextUrl);
  return NextResponse.rewrite(rewriteUrl);
} 