import {useState} from "react";
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import classes from "./signup.module.css";
import Card from "../ui/Card";

export default function Signin() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSignin(e) {
        e.preventDefault();

        fetch('/api/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({username, password})
        }).then(() => {
            cookie.set("username", username);
            router.push('/');
        }).catch((e) => {
            console.error(e);
        });
    }

    return (<Card>
        <div className={classes.form}>
            <div className={classes.control}>
                <label>Username:</label>
                <input type={`text`} value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className={classes.control}>
                <label>Password:</label>
                <input type={`password`} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={classes.actions}>
                <button onClick={handleSignin}>Sign Up</button>
            </div>
        </div>
    </Card>
    );

}
