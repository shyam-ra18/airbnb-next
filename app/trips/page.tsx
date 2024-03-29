import ClientOnly from "../(components)/ClientOnly"
import EmptyState from "../(components)/EmptyState"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import TripsClient from "./TripsClient"



const TripsPage = async () => {

    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Oops! Don't have trips ?"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({ userId: currentUser.id });
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No trips found!"
                    subtitle="Looks like you haven't plan any trips."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage