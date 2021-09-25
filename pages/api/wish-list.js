import {getWishList} from '../../db'

export default async function handler(req, res) {
    res.status(200).json({wishlist: getWishList()});
}
