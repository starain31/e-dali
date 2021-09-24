import ProductList from "../components/products/ProductList";



export default function Home({products}) {
    return <ProductList products={products}/>;
}

export async function getStaticProps() {
    return fetch('http://localhost:3000/api/products-list')
        .then(res => res.json())
        .then(({products}) => {
            return {
                props: {
                    products
                },
                revalidate: 60
            }
        });
}
