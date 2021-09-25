import {Low, JSONFile} from 'lowdb';

const products = new Low(new JSONFile('db/products.json'));
const wishlist = new Low(new JSONFile('db/wishlist.json'));
const users = new Low(new JSONFile('db/users.json'));

export async function getProduct() {
    await products.read();
    return products.data;
}

export async function getWishList() {
    await wishlist.read();
    return wishlist.data;
}

export async function createUser({username, password}) {
    await users.read();
    users.data[username] = {
        username,password
    };
    await users.write();
}

export async function getUser({username}) {
    await users.read();
    return users.data[username];
}

