import {getWishList} from '../../service/wishlist';

import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    try {
        const {email} = jwt.verify(req.cookies.token, "process.env.JWT_SECREET");

        res.status(200).json({wishlist: await getWishList({email})});

    } catch (e) {
        res.status(200).json({wishlist:[]});
    }
}
