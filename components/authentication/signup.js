import {useState} from "react";
import { useRouter } from 'next/router';
import classes from './signup.module.css';
import Card from "../ui/Card";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const router = useRouter();

    function handleSignUp(e) {
        e.preventDefault();

        return fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({name,email, password, phone})
        }).then(() => {
            router.push('/signin');
        }).catch((e) => {
            console.error(e);
        });
    }

    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.control}>
                    <label>Name:</label>
                    <input type={`text`} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={classes.control}>
                    <label>Email:</label>
                    <input type={`email`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={classes.control}>
                    <label>Phone:</label>
                    <input type={`tel`} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className={classes.control}>
                    <label>Password:</label>
                    <input type={`password`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </Card>
    );
}
