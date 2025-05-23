import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const authPages = ["/login", "/signup" , "/"]

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const isAuth = !!token
  const isAuthPage = authPages.includes(req.nextUrl.pathname)

  // 1. Redirect unauthenticated users trying to access protected pages
  if (!isAuth && req.nextUrl.pathname.startsWith("/chat")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // 2. Redirect authenticated users away from auth pages
  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL("/chat", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/chat", "/login", "/signup", '/'],
}