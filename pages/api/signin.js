import cookie from 'cookie';
import {signin} from "../../service/authentication/signin";

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST' && !req.body) {
            res.status(404).send({message: 'Invalid request.'});
        }

        return signin(req.body)
            .then(function (token) {
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("token", token, {
                        httpOnly: true,
                        maxAge: 60 * 60,
                        sameSite: "strict",
                        path: "/",
                    })
                );
                res.status(200).json({token});
            })
            .catch(function (e) {
                console.error(e);
                res.status(400).send({message: e});
            });
    } catch (e) {
        console.log(e);
        return res.status(404).send({message: "Invalid username or password"});
    }

}