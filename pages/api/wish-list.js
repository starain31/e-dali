import {getWishList} from '../../service/wishlist';

import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    try {
        const {email} = jwt.verify(req.cookies.token, "I don't do drugs. I am drugs.");

        res.status(200).json({wishlist: await getWishList({email})});

    } catch (e) {
        res.status(200).json({wishlist:[]});
    }
}
