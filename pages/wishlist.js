import useSWR from 'swr'

import WishList from "../components/products/WishList";
import {fetcher} from "../utility";

export default function WishlistPage() {
    const { data, error } = useSWR('/api/wish-list', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return <WishList products={data.wishlist}/>;
}