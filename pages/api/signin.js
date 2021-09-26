import cookie from 'cookie';
import {signin} from "../../service/authentication/signin";

export default async function handler(req, res) {
    try {
        switch (req.method) {
            case "POST":
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("token", await signin(req.body), {
                        httpOnly: true,
                        maxAge: 60 * 60,
                        sameSite: "strict",
                        path: "/",
                    })
                );

                res.statusCode = 200;
                res.json({success: true});
                break;
            default:
                res.status(404).send();
        }
    } catch (e) {
        console.log(e);
        return res.status(404).send({message: "Invalid username or password"});
    }

}