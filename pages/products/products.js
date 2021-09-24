import styles from "../../styles/Home.module.css";

export default function Products({products}) {
    return <ul className={styles.grid}>
        {
            products.map((product) =>
                <li className={styles.card}>
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <img src={product.image} alt={`favicon.ico`}/>
                    </div>
                </li>)
        }
    </ul>
}