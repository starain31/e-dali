import {Low, JSONFile} from 'lowdb';


const products = new Low(new JSONFile('./products.json'));

const wishlist = new Low(new JSONFile('./wishlist.json'));

export function getProduct() {
    return products.data;
}

export function getWishList() {
    return wishlist.data;
}

