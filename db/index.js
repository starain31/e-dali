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

export async function getWishList({username}) {
    await wishlist.read();
    await products.read();
    return (wishlist.data[username] ?? []).map((productId) => products.data.find(p => p.id === productId));
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
