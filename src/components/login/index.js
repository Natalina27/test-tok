import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../redux/reducer';

const getData = async(token) => {
    const data = await fetch('https://api-nodejs-todolist.herokuapp.com/user/me',{
        method: "GET",
        headers: {"Authorization": token}
    })
    console.log(data);
    const user = await data.json();
    console.log('content', user);
    return user;

}
const fetchAPI = async (e,{email, password}) => {
    e.preventDefault();
    const data = await fetch('https://api-nodejs-todolist.herokuapp.com/user/login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           email,
            password
        })
    })
    console.log('data', data);
    const content = await data.json();
    const {token} = content;
    console.log('token', token);
    console.log(email, password);

    await getData(token);
    return token;

}

const Login = ( props ) => {
    console.log('login props', props);
    props.getToken('hello!');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <h1>Login</h1>
            <div>{props.test}</div>
            <form onSubmit={(e)=>fetchAPI( e, {email, password})}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="submit" />
            </form>

        </>
    );
};

const mapStateToProps = (state) => {
    return {
        test: state.reducer.test
    }
}

export default connect ( mapStateToProps , { getToken })(Login);