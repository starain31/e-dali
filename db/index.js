import {Low, JSONFile} from 'lowdb';

const products = new Low(new JSONFile('db/products.json'));
const wishlist = new Low(new JSONFile('db/wishlist.json'));
const users = new Low(new JSONFile('db/users.json'));

export async function getProduct() {
    await products.read();
    return products.data;
}

export async function getWishList({username}) {
    await wishlist.read();
    await products.read();
    return (wishlist.data[username] ?? []).map((productId) => products.data.find(p => p.id === productId));
}

export async function createUser({username, password, phone}) {
    await users.read();
    users.data[username] = {
        username, password, phone
    };
    await users.write();
}

export async function getUser({username}) {
    await users.read();
    return users.data[username];
}

export async function addToWishList({username, productId}) {
    await wishlist.read();
    wishlist.data[username] = new Set(wishlist.data[username] ?? []);
    wishlist.data[username].add(productId);
    wishlist.data[username] = [...wishlist.data[username]];
    await wishlist.write();
}

export async function removeFromWishList({username, productId}) {
    await wishlist.read();
    wishlist.data[username] = new Set(wishlist.data[username] ?? []);
    wishlist.data[username].delete(productId);
    wishlist.data[username] = [...wishlist.data[username]];
    await wishlist.write();
}
