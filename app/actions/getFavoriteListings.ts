import prisma from "@/lib/prismaDb";
import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const favoriteListings = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });
    return favoriteListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
