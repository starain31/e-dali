import {getUser} from "../../db";
import jwt from "jsonwebtoken";

export async function signin({email, password}) {
    const user = await getUser({email, password});

    if (!user || user.password !== password) {
        throw 'Invalid username or password';
    }

    return jwt.sign({...user, password: undefined}, "process.env.JWT_SECREET");
}