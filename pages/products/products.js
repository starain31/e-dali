import styles from "../../styles/Home.module.css";

export default function Products() {
    return <ul className={styles.grid}>
        <li className={styles.card}>
            <div>
                <h1>Un Chien Andalou (film still)</h1>
                <p>One of the most acclaimed films in cinema history, Un Chien Andalou (An Andalusian Dog) (1929) is a short silent surrealist film by Spanish director Luis Buñuel and artist Salvador Dalí.</p>
                <img src={`https://uploads7.wikiart.org/images/salvador-dali/un-chien-andalou-film-still-1928.jpg!PinterestSmall.jpg`} alt={`favicon.ico`}/>
            </div>
        </li>
    </ul>
}