import { useRef, useState } from "react";
import { register } from "../API/loginapi";

export default function RegisterPage() {
    const emailRef = useRef();
    const otpRef = useRef();
    const [isDisabled, setDisabled] = useState(true);
    const [isEDisabled, setEeDisabled] = useState(false);
    const r = async () => {
        const email = emailRef.current.value;
        const otp = otpRef.current.value;
        if(email === '') {
            alert('Email Field cannot be empty');
        } else if(isEDisabled === true) {
            if(otp === String(12345)) {
                alert("Successfully Registered");
            } else {
                alert("Incorrect OTP");
            }
            emailRef.current.value = '';
            otpRef.current.value = '';

            setEeDisabled(false);
            setDisabled(true);
        } else {
            await register(email).then((res) => {
                res = JSON.parse(JSON.stringify(res));
                alert(res.data.msg);
                setDisabled(false);
                setEeDisabled(true);
            });
        }
    }
    return (
        <>
        <div id="logindiv" className="container-fluid">
            <h1 id='logintext'>Register Page</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" ref={emailRef} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" disabled={isEDisabled}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter the OTP</label>
                <input ref={otpRef} type="number" class="form-control" id="exampleFormControlInput1" disabled={isDisabled}/>
            </div>
            <div onClick={r} class="col-auto">
                <button class="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </div>
        </>
    );
}