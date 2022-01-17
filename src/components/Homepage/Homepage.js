// import axios from "axios";
import React, { Component } from "react";
import "./Homepage.css";
import Sidebar from "./Sidebar/Sidebar";

export default class Home extends Component {


    render() {
        return (
            <div className="homepg">
                <Sidebar />
                {/* <Content /> */}
            </div>
        )
    }
}