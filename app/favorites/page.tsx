import ClientOnly from "../(components)/ClientOnly"
import EmptyState from "../(components)/EmptyState"
import getFavoriteListings from "../actions/getFavoriteListings"
import getCurrentUser from '@/app/actions/getCurrentUser';
import FavoritesClient from "./FavoritesClient";


const MyFavorites = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Oops! Don't have favorite place ?"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }
    const listings = await getFavoriteListings();
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorite found"
                    subtitle="Looks like you don't have favorite listings."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default MyFavorites