import ClientOnly from "../(components)/ClientOnly"
import EmptyState from "../(components)/EmptyState"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ReservationClient from "./ReservationClient"


const MyReservations = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Oops! Don't have reservations ?"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({ authorId: currentUser.id });
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No reservation found!"
                    subtitle="Looks like you have not reservation on your property."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default MyReservations