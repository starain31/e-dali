import classes from './ProductList.module.css';
import productClass from './Product.module.css';
import Product from "./Product";

function ProductList({products}) {
    function adToWishList({id}) {
        fetch('/api/add-to-wish-list', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({id})
        }).then((r) => {
            if(r.status === 0) {
                console.log(`Wishlist Successfully added.`)
            } else {
                console.log(`Wishlist Adding failed.`)
            }
        }).catch((e) => {
            console.error(e);
        });
    }

    return (
        <ul className={classes.list}>{
            products.map((product) => (
                <li key={product.id}>
                    <Product
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        ActionButton={
                            <div className={productClass.actions}>
                                <button onClick={() => adToWishList({id: product.id})}>ADD TO WISH LIST</button>
                            </div>
                        }
                    />
                </li>
            ))
        }</ul>
    );
}

export default ProductList;
