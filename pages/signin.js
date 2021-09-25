import {useState} from "react";
import { useRouter } from 'next/router'

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
            router.push('/');
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
                <button onClick={handleSignin}>Sign In</button>
            </form>
        </div>
    );

}
