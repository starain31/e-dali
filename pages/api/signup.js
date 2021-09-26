import {signup} from "../../service/authentication/signup";

export default async function handler(req, res) {
    try {
        switch (req.method) {
            case "POST":
                return res.status(200).send(await signup(req.body));
            default:
                res.status(404).send();
        }
    } catch (e) {
        res.status(400).send(e);
    }
}