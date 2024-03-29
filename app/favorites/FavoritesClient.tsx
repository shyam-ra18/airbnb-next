import { SafeUser } from "../types"
import Heading from "../(components)/navbar/Heading"
import Container from "../(components)/Container"
import ListingCard from "../(components)/listings/ListingCard"

interface ListingClientProps {
    listings: any | null,
    currentUser?: SafeUser | null
}

const FavoritesClient: React.FC<ListingClientProps> = ({ listings, currentUser }) => {
    return (
        <Container>
            <Heading
                title="Favorites"
                subTitle="List of places you have favorited"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings?.map((listing: any) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavoritesClient