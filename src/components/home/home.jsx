import React, { useEffect, useState } from "react";
import "./home.css";
import logo from '../../images/logo.svg';
import logo_txt from "../../images/logo-txt.svg";
import { Col, Dropdown, Menu, Row, Select } from "antd";
import arrow_down from "../../images/down_arrow.svg";
import DropdownIcon from "../../image_components/dropdownIcon";
import language_icon from "../../images/language_sign.svg";
import profile_img from "../../images/profile_img.svg";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import AuctionCards from "../../commonComponents/auctionCards";
import AppConstants from "../../utils/constants";
import { useFetcher, useNavigate } from "react-router-dom";

const header_center_items = [
    {
        id: "1",
        displayName: "Auctions"
    },
    {
        id: "2",
        displayName: "Bidding"
    },
    {
        id: "3",
        displayName: "About us"
    },
]

const lang_items = [
    {
        id: "1",
        displayLang: "English"
    },
    {
        id: "2",
        displayLang: "Korean"
    }
]

const profile_items = [
    {
        id: "1",
        displayName: "View Profile"
    },
    {
        id: "1",
        displayName: "Settings"
    },
    {
        id: "1",
        displayName: "My Bids"
    },
    {
        id: "1",
        displayName: "Logout"
    },
    {
        id: "1",
        displayName: "View Profile"
    },
]

const { Option } = Select;

export default function Home() {

    const [selectedLang, setSelectedLang] = useState(lang_items[0]?.displayLang);
    const navigate = useNavigate();
    const [isToken, setToken] = useState('');
    const [userDetails, setUserDetails] = useState({});

    const logoutFunc = () => {
        try {
            localStorage.setItem('key', null);
            localStorage.setItem('current_user', {});
            setToken('');
            setUserDetails({})
        } catch (err) {
            console.log("Error in logoutFunc::", err);
        }
    }

    const items = [
        {
            key: '1',
            label: (
                <div className="item_one font_props_head profile_items">
                    <div className="dp_details_child_drop">
                        <img src={profile_img} alt="Profile Dp" />
                    </div>
                    <div>
                        <div style={{ fontWeight: "600" }}>Olivia Rhye</div>
                        olivia@untitledui.com
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className={"font_props_head profile_items"}>View Profile</div>
            ),
            // icon: <SmileOutlined />,
            disabled: false,
        },
        {
            key: '3',
            label: (
                <div className={"font_props_head profile_items"}>Settings</div>
            ),
            disabled: false,
        },
        {
            key: '4',
            // danger: true,
            label: (
                <div className={"font_props_head profile_items"}>My Bids</div>
            ),
        },
        {
            key: '5',
            // danger: true,
            label: (
                <div className={"font_props_head profile_items"}>My Auctions</div>
            ),
        },
        {
            key: '6',
            // danger: true,
            label: (
                <div 
                    className={"font_props_head profile_items"}
                    onClick={() => logoutFunc()}
                >Log out</div>
            ),
        },
    ];

    useEffect(() => {
        const token = localStorage.getItem('key');
        const userDetail = localStorage.getItem('current_User');
        setToken(token);
        setUserDetails(JSON.parse(userDetail));
    }, []);

    useEffect(() => { }, [isToken, userDetails])

    const header_logo_part = () => {
        return (
            <div className="header_logo_part_home">
                <img className="vector_h" src={logo} alt="logo_icon" />
                <img className="g_auction_h" src={logo_txt} alt="logo_txt" />
            </div>
        )
    }

    const center_header_part = () => {
        return (
            <Menu className="center_header_menu" mode="horizontal">
                {(header_center_items || []).map((item) => {
                    return (
                        <Menu.Item className="menu_items font_props_head" style={{ display: "flex" }}>
                            <div>
                                {item?.displayName}
                            </div>
                            <div>
                                <img src={arrow_down} alt="Down Arrow" />
                            </div>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )
    }

    const select_dropdown = () => {
        return (
            <div className="lang_select_container">
                <div><img src={language_icon} alt="Language Sign" /></div>
                <Select
                    className="select_dropdown"
                    removeIcon
                    suffixIcon={<DropdownIcon />}
                    value={selectedLang}
                >
                    {(lang_items || []).map((item) => (
                        <Option>{item?.displayLang}</Option>
                    ))}
                </Select>
            </div>
        )
    }

    const profile_details = () => {
        return (
            <Dropdown
                className="drop-drop-dropdown font_props_head"
                menu={{
                    items,
                }}
            >
                <div className="dp_details">
                    <div className="dp_details_child">
                        <img src={profile_img} alt="Profile Dp" />
                    </div>
                </div>
            </Dropdown>
        )
    }

    const header_part = () => {
        return (
            <div className="home_header">
                <Row className="row-home">
                    <Col span={(isToken) ? 11 : 9}>{header_logo_part()}</Col>
                    <Col span={8}>{center_header_part()}</Col>
                    <Col span={3}>
                        <div className="">
                            {select_dropdown()}

                        </div>
                    </Col>
                    {(isToken) ?
                        <>
                            <Col span={0}></Col>
                            <Col span={2}>{profile_details()}</Col>
                        </>
                        :
                        <>
                            <Col span={3}>
                                <div className="login_get_started">
                                    <div
                                        className="home_log_txt"
                                        onClick={() => navigate('/login')}
                                    >
                                        {AppConstants?.login?.login_txt}
                                    </div>
                                    <div
                                        className="home_started"
                                        onClick={() => navigate('/register')}
                                    >
                                        Get Started
                                    </div>
                                </div>
                            </Col>
                        </>
                    }

                    {/* <Col span={1}></Col> */}
                    {/* <Col span={2}>{profile_details()}</Col> */}

                </Row>
            </div>
        )
    }

    const auctions_content_part = () => (
        <>
            {(isToken && (userDetails)) ?
                <div className="olivia_text">
                    Hello <span style={{ color: "#235BDB" }}>{userDetails?.firstName}</span>
                </div>
            : 
                <></>
            }

            <div className={(isToken) ? "auctions_content_part": "auctions_content_part_token"}>
                <AuctionCards />
            </div>
        </>

    )

    return (
        <div style={{ background: "#FFFFFF" }}>
            {header_part()}
            {auctions_content_part()}
        </div>
    )
}