import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        const {data} = await axios.post(url, {username,password});
        setLoggedInUsername(username);
        setId(data.Id);
    }
    return (
        <div className="bg-blue-300 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input value={username} 
                onChange={ev => setUsername(ev.target.value)} 
                type="text" placeholder="Username" 
                className="block w-full rounded-md pd-2 mb-2 border" />
                <input value={password} 
                onChange={ev => setPassword(ev.target.value)} 
                type="text" placeholder="Password" 
                className="block w-full rounded-md pd-2 mb-2 border" />
                <button className="bg-blue-500 text-white block w-full rounded-md p-2">
                    {isLoginOrRegister === 'register' ? 'Sign Up' : 'Login'}
                </button>
                <div className="text-center mt-2">
                    {isLoginOrRegister === 'register' && (
                        <div>Already a member? <button onClick={() => setIsLoginOrRegister('login')}>Login here</button></div>
                    )}
                    {isLoginOrRegister === 'login' && (
                        <div>Dont have an account? <button onClick={() => setIsLoginOrRegister('register')}>Sign Up</button></div>
                    )}
                </div>
            </form>
        </div>
    );
}