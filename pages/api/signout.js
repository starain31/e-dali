import cookie from 'cookie';

export default async function handler(req, res) {
    try {
        switch (req.method) {
            case "GET":
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("token", "", {
                        httpOnly: true,
                        sameSite: "strict",
                        expires: new Date(0),
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
        return res.status(404).send({message: "Invalid Request"});
    }

}