import {useState} from "react";

export default function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(e) {
        e.preventDefault();

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({username, password})
        }).then(r => r.json()).then((r) => {
            console.log(r);
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
                <button onClick={handleSignUp}>signup</button>
            </form>
        </div>
    )

}
