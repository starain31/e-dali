import {getProduct} from '../../service/products'

export default async function handler(req, res) {
    res.status(200).json({products: await getProduct({searchKey: req.query.searchKey})});
}
