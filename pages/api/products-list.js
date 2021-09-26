import {getProduct} from '../../service/products'

export default async function handler(req, res) {
    try {
        res.status(200).json({products: await getProduct({searchKey: req.query.searchKey})});
    } catch (e) {
        res.status(400).json({message: "server error"});
    }
}
