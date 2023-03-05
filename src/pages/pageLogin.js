import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {async_login} from "../model/model";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

const PageLogin = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("");
    if (props.isLoggedIn) navigate("/products")
    else {
        const AuthOnClick = async () => {
            try {
                const token = await async_login(JSON.stringify({
                    email: login,
                    password: password
                }));
                if (token === "nothash") {
                    setData('User not found. Try again.');
                }
                else if(token==''){
                }
                else {
                    localStorage.setItem("login", login);
                    localStorage.setItem("hash", String(token));
                    props.setLoggedIn(true);
                    navigate("/products");
                }
            } catch (error) {
                console.error(error);
            }
        };

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };

        const handleLoginChange = (e) => {
            setLogin(e.target.value);
        };

        return (
            <div className="containerLogin">
                <p>login</p>
                <input id="email" type="text" onChange={handleLoginChange}></input>
                <p>password</p>
                <input id="password" type="password" onChange={handlePasswordChange}></input>
                <input id="enter" type="button" value="enter" onClick={AuthOnClick}></input>
                <input id="error" type="text" value={data} disabled></input>
            </div>
        );
    }
    ;
}

export default PageLogin;
