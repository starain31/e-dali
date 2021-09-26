import {getWishList, removeFromWishList} from '../../service/wishlist';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    try {
        if (req.method === 'POST' && req.body) {
            const productId = req.body.id;
            const {email} = jwt.verify(req.cookies.token, "I don't do drugs. I am drugs.");

            await removeFromWishList({productId, email});
            return res.status(200).json({wishlist: await getWishList({email})});
        }

        res.status(403).json({message: 'Invalid request'});
    } catch (e) {
        res.status(403).json({e});
    }
}
