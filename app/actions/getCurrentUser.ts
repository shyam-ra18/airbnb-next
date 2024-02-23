import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prismaDb";

export async function getSession() {
  return await getServerSession(handler);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if(session !== null){      
      
      if (!session?.user?.email) return null;
      
      const currentUser = await prisma.user.findUnique({
        where: {
          email: session?.user?.email as string,
        },
      });
      
      if (!currentUser) return null;
      
      return {
        ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerified?.toISOString() || null,
      };
    }
  } catch (error: any) {
    return null;
  }
}
