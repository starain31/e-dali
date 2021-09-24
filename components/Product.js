// import Card from '../ui/Card';
// import classes from './MeetupItem.module.css';

function Product({name, description, image}) {
    return (
        <li>
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}

export default Product;