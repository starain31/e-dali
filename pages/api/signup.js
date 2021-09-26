import {createUser} from '../../db'

async function signup({username, password, phone}) {
    await createUser({username, password, phone});
}

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await signup(req.body);
            return res.status(200).send({message: "Signup Successful"});
        default:
            res.status(404).send();
    }
}