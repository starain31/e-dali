import * as db from '../../db';

export async function getWishList({email}) {
    return db.getWishList({email});
}

export async function addToWishList({email, productId}) {
    return  db.addToWishList({productId, email});
}

export async function removeFromWishList({email, productId}) {
    return db.removeFromWishList({email, productId})
}

