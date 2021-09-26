import {Low, JSONFile} from 'lowdb';

const products = new Low(new JSONFile('db/products.json'));
const wishlist = new Low(new JSONFile('db/wishlist.json'));
const users = new Low(new JSONFile('db/users.json'));

export async function getProduct({searchKey}) {
    await products.read();
    if(searchKey) {
        return products.data.filter((p) => p.name.toLowerCase().includes(searchKey.toLowerCase()));
    }
    return products.data;
}

export async function getWishList({email}) {
    console.log({email});
    await wishlist.read();
    await products.read();
    return (wishlist.data[email] ?? []).map((productId) => products.data.find(p => p.id === productId));
}

export async function createUser({name, email, phone, password,}) {
    await users.read();
    if(users.data[email]) {
        throw {message: 'email exists.'}
    }
    users.data[email] = {
        name, password, phone, email, id: Object.keys(users.data).length
    };
    await users.write();
    return users.data[email];
}

export async function getUser({email}) {

    await users.read();
    return users.data[email];
}

export async function addToWishList({email, productId}) {
    await wishlist.read();
    wishlist.data[email] = new Set(wishlist.data[email] ?? []);
    wishlist.data[email].add(productId);
    wishlist.data[email] = [...wishlist.data[email]];
    await wishlist.write();
}

export async function removeFromWishList({username, productId}) {
    await wishlist.read();
    wishlist.data[username] = new Set(wishlist.data[username] ?? []);
    wishlist.data[username].delete(productId);
    wishlist.data[username] = [...wishlist.data[username]];
    await wishlist.write();
}
