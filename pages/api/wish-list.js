import {Low, JSONFile} from 'lowdb'

const wishList = new Low(new JSONFile('db/wishlist.json'));

export default async function handler(req, res) {
    await wishList.read()

    res.status(200).json({wishlist: wishList.data});
}
