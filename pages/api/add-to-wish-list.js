import {addToWishList} from '../../db';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST' && req.body) {
            const productId = req.body.id;
            const username = req.cookies.username;

            await addToWishList({productId, username});
            return res.status(200).json({message: "Successfully added to wishlist"});
        }

        res.status(403).json({message: 'Invalid request'});
    } catch (e) {
        res.status(403).json({e});
    }
}
