import ClientOnly from "./(components)/ClientOnly";
import Container from "./(components)/Container";
import EmptyState from "./(components)/EmptyState";
import ListingCard from "./(components)/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";

interface Homeprops {
  searchParams?: IListingsParams
}

export default async function Home({ searchParams }: Homeprops) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div className="
          pt-24
          grid
          grid-col-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        ">
          {
            listings.map((listing: any) => (
              <ListingCard
                key={listing.id}
                data={listing}
                currentUser={currentUser}
              />
            ))
          }
        </div>
      </Container>
    </ClientOnly>
  )
}
