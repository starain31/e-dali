import classes from './ProductList.module.css';
import productClass from './Product.module.css';
import Product from "./Product";
import {useState} from "react";
import Card from "../ui/Card";

function ProductList({products}) {
    function adToWishList({id}) {
        fetch('/api/add-to-wish-list', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({id})
        }).then((r) => {
            if (r.status === 0) {
                console.log(`Wishlist Successfully added.`)
            } else {
                console.log(`Wishlist Adding failed.`)
            }
        }).catch((e) => {
            console.error(e);
        });
    }

    function handleSearch(e) {
        fetch(`api/products-list?searchKey=${e.target.value}`,).then(r => r.json()).then(({products}) => {
            setProductsState(products);
        });
    }

    const [productsState, setProductsState] = useState(products);

    return (
        <div>
            <Card>
                <div className={classes.form}>
                    <div className={classes.control}>
                        <input type={`text`} onChange={handleSearch}/>
                    </div>
                </div>
            </Card>


            <ul className={classes.list}>{
                productsState.map((product) => (
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
        </div>
    );
}

export default ProductList;
