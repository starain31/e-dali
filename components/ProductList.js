import classes from './ProductList.module.css';
import Product from "./Product";

function ProductList({products}) {
    return (
        <ul className={classes.list}>{
            products.map((product) => (
                <li key={product.id}>
                    <Product
                        name={product.name}
                        description={product.description}
                        image={product.image}
                    />
                </li>
            ))
        }</ul>
    );
}

export default ProductList;