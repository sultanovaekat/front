import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { async_login } from '../model/model';

const PageLogin = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');


    const AuthOnClick = async () => {
        try {
            const tok = await async_login(
                JSON.stringify({
                    email: login,
                    password: password,
                })
            );
            if (tok === 'notfound') {
                setData('User not found. Try again.');
            } else if (tok === '') {
            } else {
                localStorage.setItem('login', login);
                localStorage.setItem('JWT', tok.token);
                localStorage.setItem('role', tok.role);
                localStorage.setItem('isLoggedIn',"true")
                navigate('/products');
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

    if (!props.isLoggedIn) {
        return (
            <div className='containerLogin'>
                <p>login</p>
                <input id='email' type='text' onChange={handleLoginChange}></input>
                <p>password</p>
                <input id='password' type='password' onChange={handlePasswordChange}></input>
                <input id='enter' type='button' value='enter' onClick={AuthOnClick}></input>
                <input id='error' type='text' value={data} disabled></input>
            </div>
        );
    }


};
export default PageLogin;
