import * as db from '../../db/index';
export async function getProduct({searchKey}) {
    return db.getProduct({searchKey});
}