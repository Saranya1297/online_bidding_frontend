import React, { useEffect, useState } from "react";
import logo from '../../images/logo.svg';
import logo_txt from "../../images/logo-txt.svg";
import './registration.css';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import AppConstants from "../../utils/constants";
import registration_side_img from "../../images/registation_side_img.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../../store/actions/actions";

export default function Registration() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerPayload, setRegisterPayload] = useState({});
    const [register_load, setRegister_load] = useState(false);
    const reducerState = useSelector((state) => state.simpleReducer);
    const {onRegLoad, registrationSuccess} = reducerState;

    useEffect(() => {
        if (register_load && !(onRegLoad)) {
            setRegister_load(false);
            navigate('/login_success');
        }
    }, [register_load, onRegLoad])

    const onFinish = (values) => {
        console.log('Success:', values);
        const payload = {
            firstName: registerPayload?.firstName,
            lastName: registerPayload?.lastName,
            email: registerPayload?.emailAddress,
            password: registerPayload?.password
        }
        dispatch(registerAction(payload));
        setRegister_load(true);
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
            <div className="sign_up_part">
                <div>
                    <div className="sign_up_txt">{AppConstants?.sign_up_page?.sign_up}</div>
                    <div className="subtitle">{AppConstants?.sign_up_page?.reg_desc}</div>
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
                            label={AppConstants.sign_up_page.first_name}
                            name={"first_name"}
                            rules={[{ required: true, message: 'Please enter your First Name!' }]}
                        >
                            <div> 
                                <Input 
                                    onChange={(e) => setRegisterPayload({...registerPayload, firstName: e?.target?.value})}
                                />
                            </div>
                            
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                            label={AppConstants.sign_up_page.last_name}
                            name={"last_name"}
                            rules={[{ required: true, message: 'Please enter your Last Name!' }]}
                        >
                            <Input 
                              onChange={(e) => setRegisterPayload({...registerPayload, lastName: e?.target?.value})}  
                            />
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                            label={AppConstants.sign_up_page.email}
                            name={"email"}
                            rules={[{ required: true, message: 'Please enter your Email Address!' }]}
                        >
                            <Input 
                                onChange={(e) => setRegisterPayload({...registerPayload, emailAddress: e?.target?.value})}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                            label={AppConstants.sign_up_page.password}
                            name={"password"}
                            rules={[{ required: true, message: 'please enter your password!' }]}
                        >
                            <Input.Password 
                                onChange={(e) => setRegisterPayload({...registerPayload, password: e?.target?.value})}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form_item_form"
                            name="remember"
                            valuePropName="checked"
                        // wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>{AppConstants?.sign_up_page?.outbid_emails}</Checkbox>
                        </Form.Item>
                        <Form.Item 
                            className="form_item_form"
                            // wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Button 
                            className="submit_btn"
                            type="primary" 
                            htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

    const img_shown_part = () => {
        return (
            <div className="img_shown_part">
                <img src={registration_side_img} alt="Registration side image" />
            </div>
        )
    }

    const footer_part = () => {
        return (
            <p className="want_auc_rules font_props">Want to know more? <span className="auc_rules">Auction rules</span></p>
        )
    }

    const content_part = () => {
        return (
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={9}>
                        {sign_up_part()}
                        {footer_part()}
                    </Col>
                    <Col span={4}></Col>
                    <Col span={9}>{img_shown_part()}</Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }

    return (
        <div className="registration_component font_props">
            {header_logo_part()}
            {content_part()}            
        </div>
    )
}