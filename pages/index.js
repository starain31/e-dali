import ProductList from "../components/products/ProductList";
import Layout from "../components/layout/Layout";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "Un Chien Andalou (film still)",
        description: "One of the most acclaimed films in cinema history, Un Chien Andalou (An Andalusian Dog) (1929) is a short silent surrealist film by Spanish director Luis Buñuel and artist Salvador Dalí.",
        image: "https://uploads7.wikiart.org/images/salvador-dali/un-chien-andalou-film-still-1928.jpg"
    },
    {
        id: 2,
        name: "The Persistence of Memory",
        description: "The Persistence of Memory (1931) is one of the most iconic and recognizable paintings of Surrealism.",
        image: "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg"
    },
];

export default function Home() {
    return <Layout><ProductList products={DUMMY_PRODUCTS}/></Layout>;

}
