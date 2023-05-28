import { NextResponse, NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api|time).*)"],
};

export default function middleware(request: NextRequest) {
  const rewritePath = "/time"
  const rewriteUrl = new URL(rewritePath, request.nextUrl);
  return NextResponse.rewrite(rewriteUrl);
}
