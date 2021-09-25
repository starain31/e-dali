import classes from './ProductList.module.css';
import productClass from './Product.module.css';
import Product from "./Product";
import {useState} from "react";

function WishList({products}) {
    const [wishlist, setWishlist] = useState(products);

    function removeFromWishList({id}) {
        fetch('/api/remove-from-wish-list', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({id})
        }).then(r => r.json()).then(({wishlist}) => {
            console.log(`Removed from Wishlist Successfully.`);
            setWishlist(wishlist);
        }).catch((e) => {
            console.error(e);
        });
    }

    return (
        <ul className={classes.list}>{
            wishlist.map((product) => (
                <li key={product.id}>
                    <Product
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        ActionButton={
                            <div className={productClass.actions}>
                                <button onClick={() => removeFromWishList({id: product.id})}>REMOVE FROM WISH LIST
                                </button>
                            </div>
                        }
                    />
                </li>
            ))
        }</ul>
    );
}

export default WishList;
