import useSWR from 'swr'

import ProductList from "../components/products/ProductList";
import {fetcher} from "../utility";

export default function Home() {
    const { data, error } = useSWR('/api/products-list', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return <ProductList products={data.products}/>;
}
