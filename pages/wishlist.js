import useSWR from 'swr'

import ProductList from "../components/products/ProductList";
import {fetcher} from "./api/utility";

export default function Wishlist() {
    const { data, error } = useSWR('/api/wish-list', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return <ProductList products={data.wishlist}/>;
}