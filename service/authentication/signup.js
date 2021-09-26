import {createUser} from "../../db";

export async function signup({name, email, phone, password}) {
    if(!(name && email && phone && password)) {
        throw {message: 'Could not signup.'}
    }
    return createUser({name, email, phone, password});
}