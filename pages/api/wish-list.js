import {getWishList} from '../../db'
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    try {
        const {username} = jwt.verify(req.cookies.token, "I don't do drugs. I am drugs.");

        res.status(200).json({wishlist: await getWishList({username})});

    } catch (e) {
        res.status(200).json({wishlist:[]});
    }
}
