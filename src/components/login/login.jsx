import React, { useEffect, useState } from "react";
import logo from '../../images/logo.svg';
import logo_txt from "../../images/logo-txt.svg";
import AppConstants from "../../utils/constants";
import registration_side_img from "../../images/registation_side_img.svg";
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import './login.css';
import login_side_img from "../../images/login_side_img.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/actions";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reducerState = useSelector((state) => state.simpleReducer);
    const { loginSuccess, onLoad } = reducerState;
    const [loginPayload, setLoginPayload] = useState({});
    const [login_load, setLogin_load] = useState(false);

    useEffect(() => {
        if (login_load == true && onLoad == false) {
            setLogin_load(false);
            navigate('/');
        }
    }, [login_load, onLoad]);

    useEffect(() => {
        if (loginSuccess?.status == "200" || loginSuccess?.status == "201") {
            setLoginPayload({});
            localStorage.setItem('key', loginSuccess.token);
            localStorage.setItem('current_User', JSON.stringify(loginSuccess.userDetails));
        }
    }, [loginSuccess])

    const onFinish = (values) => {
        console.log('Success:', values);        
        let payload = {
            email: loginPayload?.emailAddress,
            password: loginPayload?.login_password
        }
        dispatch(loginAction(payload));
        setLogin_load(true);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const header_logo_part = () => {
        return (
            <div className="header_logo_part">
                <img className="vector" src={logo} alt="logo_icon" />
                <img className="g_auction" src={logo_txt} alt="logo_txt" />
            </div>
        )
    }

    const sign_up_part = () => {
        return (
            <div className="sign_up_part_login">
                <div>
                    <div className="sign_up_txt">{AppConstants?.login?.login_txt}</div>
                    <div className="subtitle">{AppConstants?.login?.login_desc}</div>
                </div>
                <div>
                    <Form
                        name="basic"
                        style={{ maxWidth: 600 }}
                        form={form}
                        // initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

                        <Form.Item
                            className="form_item_form"
                            label={AppConstants.sign_up_page.email}
                            name={"email"}
                            rules={[{ required: true, message: 'Please enter your Email Address!' }]}
                        >
                            <Input
                                onChange={(e) => setLoginPayload({ ...loginPayload, emailAddress: e?.target?.value })}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                            label={AppConstants.sign_up_page.password}
                            name={"password"}
                            rules={[{ required: true, message: 'please enter your password!' }]}
                        >
                            <Input.Password 
                                onChange={(e) => setLoginPayload({ ...loginPayload, login_password: e?.target?.value })}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                            name="remember"
                            valuePropName="checked"
                        // wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>{AppConstants?.login?.signed_in}</Checkbox>
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                        // wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Button
                                className="submit_btn"
                                type="primary"
                                htmlType="submit">
                                Continue
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

    const footer_part = () => {
        return (
            <p className="want_auc_rules font_props">Want to know more? <span className="auc_rules">Auction rules</span></p>
        )
    }

    const img_shown_part = () => {
        return (
            <div className="img_shown_part_login">
                <img src={login_side_img} alt="Login side image" />
            </div>
        )
    }

    const content_part = () => {
        return (
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={7}>
                        {sign_up_part()}
                        {footer_part()}
                    </Col>
                    <Col span={2}></Col>
                    <Col span={7}>{img_shown_part()}</Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }

    return (
        <div className="login_component font_props">
            {header_logo_part()}
            {content_part()}
        </div>
    )
}

export default Login;