import classes from './Product.module.css';

function Product({name, description, image}) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={image} alt={name}/>
            </div>
            <div className={classes.content}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}

export default Product;