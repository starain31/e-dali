import {getProduct} from '../../db'

export default async function handler(req, res) {
    res.status(200).json({products: getProduct()});
}
