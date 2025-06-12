import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/authService/user";

// type role = keyof typeof roleBaseRoutes;

const Authroutes = ["/login", "/registration"];
const ProtectedRoute = [""];
const dashBoardRoute = ["/dashboard", "/dashboard/skills", "/dashboard/post", "/dashboard/projects", "/dashboard/skills/add-skills"];

// const roleBaseRoutes = {
//   // using regex for all profile related path can be accessable for user
//   USER: [/^\/user/],
//   // using regex for all profile related path can be accessable for admin
//   ADMIN: [/^\/admin/],
// };
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  //   get user from decoded token
  const user = await getCurrentUser();
  //   if user not exist go login otherwise not

  if (!user) {
    if (Authroutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }
  // default protected route
  if (ProtectedRoute?.includes(pathname)) {
    if (!user) {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    } else {
      return NextResponse.next();
    }
  }

  // if (user?.role && roleBaseRoutes[user?.role as role]) {
  //   const route = roleBaseRoutes[user?.role as role];
  //   if (route.some((route) => pathname.match(route))) {
  //     return NextResponse.next();
  //   }
  // }
  if (dashBoardRoute.includes(pathname)) {
    if (user?.role === "ADMIN") {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/skills",
    "/dashboard/post",
    "/dashboard/projects",
    "/user",
    "/login",
    "/profile",
    "/createPost",
    "/registration",
    "/dashboard/skills/add-skills",
  ],
};
