import {getUser} from "../../db";
import jwt from "jsonwebtoken";

export async function signin({username, password}) {
    const user = await getUser({username, password});

    if (!user || user.password !== password) {
        throw 'Invalid username or password';
    }

    return jwt.sign({username}, "I don't do drugs. I am drugs.");
}