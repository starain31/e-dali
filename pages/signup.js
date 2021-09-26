import {useState} from "react";
import { useRouter } from 'next/router'


export default function Signup() {

    const [username, setUsername] = useState("");
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
            body: JSON.stringify({username, password, phone})
        }).then(() => {
            router.push('/signin');
        }).catch((e) => {
            console.error(e);
        });
    }

    return (
        <div>
            <form>
                <input type={`text`} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <input type={`password`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <input type={`tel`} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <br/>
                <button onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    )

}
