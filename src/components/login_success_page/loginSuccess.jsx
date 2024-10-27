import React from "react";
import './loginSuccess.css';
import logo from "../../images/logo.svg";
import logo_txt from "../../images/logo-txt.svg"
import loginSuccessImg from "../../images/login_success_img.svg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function LoginSuccess() {
    const navigate = useNavigate();

    const headerPart = () => {
        return (
            <div className="header_logo_part">
                <img className="vector" src={logo} alt="logo_icon" />
                <img className="g_auction" src={logo_txt} alt="logo_txt" />
            </div>
        )
    }

    const middlePart = () => {
        return (
            <>
                <div className="log_suc_middle">
                    Uncover Deals, Unleash Excitement: <span style={{ color: "#235BDB" }}>Dive into Our Auctions Today!</span>
                </div>
                <div className="victory_img">
                    <img src={loginSuccessImg} alt="Victory Image" />
                </div>
            </>
        )
    }

    const footerPart = () => {
        return (
            <div className="footer_suc_part">
                <Button 
                    className="login_now"
                    onClick={() => navigate('/login')}
                >
                    Login now
                </Button>
            </div>

        )
    }

    return (
        <div>
            {headerPart()}
            {middlePart()}
            {footerPart()}
        </div>
    )
}