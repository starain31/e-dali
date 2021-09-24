// import MeetupItem from './MeetupItem';
// import classes from './MeetupList.module.css';

import Product from "./Product";

function ProductList({products}) {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Product
                        name={product.name}
                        description={product.description}
                        image={product.image}
                    />
                </li>

            ))}
        </ul>
    );
}

export default ProductList;