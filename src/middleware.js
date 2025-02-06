import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


export function middleware(request) {
  const currentUser = request.cookies.get('token')?.value
  if (!currentUser && request.nextUrl.pathname=='/') {
    return NextResponse.next();
  }
  if (!currentUser && request.nextUrl.pathname.startsWith('/new-register')) {
    return NextResponse.next();
  }
  if (!currentUser && request.nextUrl.pathname.startsWith('/how-it-works')) {
    return NextResponse.next();
  }
  if (!currentUser && request.nextUrl.pathname.startsWith('/about-us')) {
    return NextResponse.next();
  }
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if(currentUser&&request.nextUrl.pathname.startsWith('/login')){
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  var response = NextResponse.next();
  response.cookies.set('token', currentUser, { httpOnly: true });
  return response
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/signin', '/new-register','/','/how-it-works','/about-us', '/about-us']
}
