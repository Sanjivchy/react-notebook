import React from 'react';
import './Style.css';
import {Link }  from 'react-router-dom';

function Signup() {
    return (
        <>
        <div className="card"> 
            <h2 className="title">sign up</h2>
            <p className=" subtitle">  have an account?<Link to="/signin" className="ml-2 cursor-pointer text-blue-700"> Sign in </Link></p>
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
                    <label for="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                 </div>
                 <button class="cta-btn">Sign up</button>
                </form>
        </div>
        </>
    )
}

export default Signup
