import {useState} from "react";
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import classes from "./signup.module.css";
import Card from "../ui/Card";

export default function Signin() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignin(e) {
        e.preventDefault();

        fetch('/api/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({email, password})
        }).then(r => r.json()).then(({name}) => {
            cookie.set("email", email);
            router.push('/');
        }).catch((e) => {
            console.error(e);
        });
    }

    return (<Card>
        <div className={classes.form}>
            <div className={classes.control}>
                <label>Email:</label>
                <input type={`text`} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={classes.control}>
                <label>Password:</label>
                <input type={`password`} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={classes.actions}>
                <button onClick={handleSignin}>Sign In</button>
            </div>
        </div>
    </Card>
    );

}
