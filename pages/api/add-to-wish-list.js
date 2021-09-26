import {addToWishList} from '../../service/wishlist';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    try {
        if (req.method === 'POST' && req.body) {
            const productId = req.body.id;
            const {email} = jwt.verify(req.cookies.token, "I don't do drugs. I am drugs.");

            if (email && productId) {
                await addToWishList({productId, email});
                return res.status(200).json({message: "Successfully added to wishlist"});
            }
            return res.status(400).send({message: "Failed wishlist addition."})
        }

        res.status(403).json({message: 'Invalid request'});
    } catch (e) {
        res.status(403).json({e});
    }
}
