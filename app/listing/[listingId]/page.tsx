import ClientOnly from "@/app/(components)/ClientOnly";
import EmptyState from "@/app/(components)/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListById from "@/app/actions/getListingById"
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface Iparams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Iparams }) => {

  const listing = await getListById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default ListingPage