import {getWishList, removeFromWishList} from '../../db';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST' && req.body) {
            const productId = req.body.id;
            const username = req.cookies.username;

            await removeFromWishList({productId, username});
            // return res.status(200).json({message: "Successfully removed from wishlist"});
            return res.status(200).json({wishlist: await getWishList({username})});

        }

        res.status(403).json({message: 'Invalid request'});
    } catch (e) {
        res.status(403).json({e});
    }
}
