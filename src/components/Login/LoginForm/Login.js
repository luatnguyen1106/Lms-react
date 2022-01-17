import React, {Component} from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import "../Login.css";
import logo from '../img/Frame.png'


export default class LoginForm extends Component {
    
    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            email: this.email,
            password: this.password
        };
        console.log(data);
        // axios.post('login', data)
        // .then(res => {
        //     localStorage.setItem('token', res.token);
        // })
        // .catch(err => {
        //     console.log(err)
        // })

    };

    

    render() {
        return (
            <div className="login">
                <img class="logo" src={logo} alt="logo"/>
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Đăng nhập</h1>

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
                <Link className="homepg" to={'/home'}><button className="btn-login">Đăng nhập</button></Link>
                
            </form>
            </div>

        )
    }
}