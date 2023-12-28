import ClientOnly from "../(components)/ClientOnly"
import EmptyState from "../(components)/EmptyState"
import getCurrentUser from "../actions/getCurrentUser"
import getListings from "../actions/getListings"
import ListingClient from "./ListingClient"



const PropertiesPage = async () => {

    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Oops! Don't have property ?"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }

    const listings = await getListings({ userId: currentUser.id });
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found!"
                    subtitle="Looks like you haven't any properties."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ListingClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage