import classes from './Product.module.css';
import Card from "../ui/Card";

function Product({name, description, image, ActionButton}) {

    return (
        <Card>
            <div className={classes.item}>
                <div className={classes.image}>
                    <img src={image} alt={name}/>
                </div>
                <div className={classes.content}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                {
                    ActionButton
                }
            </div>
        </Card>
    );
}

export default Product;