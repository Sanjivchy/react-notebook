import React from 'react';
import './Style.css';
import {Link }  from 'react-router-dom';

function SignIn() {
    return (
        <>
        <div className="logincard"> 
            <h2 className="title">log in</h2>
            <p className=" subtitle"> don't have an account?<Link to="/signup" className="ml-2 cursor-pointer text-blue-700"> Sign up</Link></p>
            <div class="social-container">
                    <Link className="social"><i class="fab fa-facebook-f"></i></Link>
                    <Link  className="social"><i class="fab fa-google-plus-g"></i></Link>
                    <Link  className="social"><i class="fab fa-linkedin-in"></i></Link>
                </div>
                <p class="or"><span>or</span></p>
                <form>
                <div class="email-login">
                     <label for="email"> <b>Email</b></label>
                     <input type="text" placeholder="Enter Email" name="uname" required/>
                     <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                 </div>
                 <button class="cta-btn">Log In</button>
                 <Link class="forget-pass" href="#">Forgot password?</Link>
                </form>
        </div>
        </>
    )
}

export default SignIn
