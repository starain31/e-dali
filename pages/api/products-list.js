import {Low, JSONFile} from 'lowdb'

const products = new Low(new JSONFile('db/products.json'))

export default async function handler(req, res) {
    await products.read()

    console.log(products.data);
    res.status(200).json({products: products.data});
}
