import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

import { db } from "../../db"
// import { PrismaClient } from '@prisma/client/edge'    
// const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  //  adapter: PrismaAdapter(db),
  session: {strategy: 'jwt'},
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        // Your GoogleProvider configuration
      },
    }), // <- Missing comma here
    CredentialsProvider({
      // Your CredentialsProvider configuration
    })
  ],
  // Additional NextAuth configuration
});