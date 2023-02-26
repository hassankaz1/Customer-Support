import React, { useCallback, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "../Styling/Login.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
import "bootstrap/dist/css/bootstrap.min.css";
import  auth  from '../firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            try {
                await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
                alert(error.message);
            }
        },
        [email, password]
    );
    
    const handleSignup = useCallback(
        async (event) => {
            event.preventDefault();
            try {
                await auth.createUserWithEmailAndPassword(email, password);
            } catch (error) {
                alert(error.message);
            }
        },
        [email, password]
    );


  
    return(
        <div className="Login-Page">
            <h1>Login/Signup</h1>
            <br></br>

            <div className="Login">
            
                <br></br>
                <div className="Login-Signin">
                    <Tabs
                        defaultActiveKey="Login"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="Login" title="Login">
                            
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                        </Tab>
                        <Tab eventKey="Signup" title="Signup">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Full name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-password">Confirm password</label>
                                    <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </form>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
      </div>
    );

}
export default Login;