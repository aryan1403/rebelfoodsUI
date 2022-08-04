import { useRef } from 'react';
import { register } from '../API/loginapi';
import './loginPage.css';
export default function LoginPage() {
    const emailRef = useRef();
    const passRef = useRef();
    const r = async () => {
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        if(email === '') {
            alert('Email Field cannot be empty');
        } else if(pass === '') {
            alert('Password Field cannot be empty');
        } else {
            await register(email).then((res) => {
                res = JSON.parse(JSON.stringify(res));
                alert(res.data.msg);
                emailRef.current.value = '';
                passRef.current.value = '';
            });
        }
    }
    return (
        <>
        <div id="logindiv" className="container-fluid">
            <h1 id='logintext'>Login Page</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" ref={emailRef} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input ref={passRef} type="password" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div onClick={r} class="col-auto">
                <button class="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </div>
        </>
    );
}