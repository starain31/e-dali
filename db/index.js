import {Low, JSONFile} from 'lowdb';

const products = new Low(new JSONFile('db/products.json'));

const wishlist = new Low(new JSONFile('db/wishlist.json'));

export async function getProduct() {
    await products.read();
    return products.data;
}

export async function getWishList() {
    await wishlist.read();
    return wishlist.data;
}

