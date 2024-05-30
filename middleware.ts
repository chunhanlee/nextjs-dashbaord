import NextAuth from "next-auth";
import { authoConfig } from "./auth.config";

export default NextAuth(authoConfig).auth;

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}