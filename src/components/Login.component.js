import React, {Component} from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
export default class Login extends Component {
    
    handleSubmit = e => {
        
        const [details] = useState({email: "", password: ""});
        e.preventDefault();
        Login(details);

    };

    render() {
        return (
            <div className="form-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Đăng nhập</h3>

                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input id="email" type='email' className="form-control"
                    onChange={e => this.email = e.target.value}>
                    </input>
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input id="password" type='password' className="form-control"
                    onChange={e => this.password = e.target.value}>
                    </input>
                </div>
                
                <p className="forgot-pw">
                    <Link className="forgot-pw" to={'/forgot'}>Quên mật khẩu?</Link>
                </p>
                <button className="btn-login">Đăng nhập</button>    
            </form>
            </div>           
        )
    }
}