import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Products from "./products/products";

const products = [
    {
        id: 1,
        name: "Un Chien Andalou (film still)",
        description: "One of the most acclaimed films in cinema history, Un Chien Andalou (An Andalusian Dog) (1929) is a short silent surrealist film by Spanish director Luis Buñuel and artist Salvador Dalí. Following the principles of Surrealism, the film does not have a narrative in the conventional sense.",
        image: 'https://uploads7.wikiart.org/images/salvador-dali/un-chien-andalou-film-still-1928.jpg'
    }
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>E-Dali</title>
                <meta name="description" content="Take me, I am the drug; take me, I am hallucinogenic."/>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>

            <main className={styles.main}>
                <h6 className={styles.title}>
                    Intelligence without ambition is a bird without wings<br/>
                    -- <a href="https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD">Salvador Dalí!</a>
                </h6>

                <Products products={products}/>
            </main>
        </div>
    )
}
