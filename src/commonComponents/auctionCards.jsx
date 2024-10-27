import React from "react";
import "./auctionCards.css";
import headphone from '../../src/images/headphone_img.svg';
import apple_airpod from '../../src/images/apple_airpod.svg';
import mi_powerbank from "../../src/images/mi_powerbank.svg";
import tribit_bluetooth from "../../src/images/tribit_img.svg";
import { Button, Col, Row } from "antd";

const auction_items = [
    {
        id: 1,
        image: headphone,
        prod_name: "Sony Black HeadPhones",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
    {
        id: 2,
        image: apple_airpod,
        prod_name: "Apple Airpod 2nd Gen",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
    {
        id: 3,
        image: mi_powerbank,
        prod_name: "Mi 3i 20000mah Power Bank",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
    {
        id: 4,
        image: tribit_bluetooth,
        prod_name: "Tribit Bluetooth Speaker",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    }, {
        id: 5,
        image: headphone,
        prod_name: "Sony Black HeadPhones",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
    {
        id: 6,
        image: apple_airpod,
        prod_name: "Apple Airpod 2nd Gen",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
    {
        id: 7,
        image: mi_powerbank,
        prod_name: "Mi 3i 20000mah Power Bank",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
    {
        id: 8,
        image: tribit_bluetooth,
        prod_name: "Tribit Bluetooth Speaker",
        min_bid: '$100',
        current_bid: "$157",
        ends_in: "1 day 12 hrs 43 minutes"
    },
]


const AuctionCards = (props) => {
    const {

    } = props;

    return (
        <Row className="auction_card">
            {(auction_items || []).map((item) => (
                <>
                    <Col span={5}>
                        <div className="auction_items_parent">
                            <div>
                                <img className="auction_img" src={item?.image} alt='auction_img' />
                            </div>
                            <div className="auction_child font_props_auction">
                                <div className="live_auc">Live Auction</div>
                                <div className="auc_prod_txt">{item?.prod_name}</div>
                                <div className="min_current_bid">
                                    <div>Minimum Bid</div>
                                    <div className="min_current_txt">{item?.min_bid}</div>
                                </div>
                                <div className="min_current_bid">
                                    <div>Current Bid</div>
                                    <div className="min_current_txt">{item?.min_bid}</div>
                                </div>
                                <div>Ends in: {item?.ends_in}</div>
                            </div>
                            <Button className="bid_now">Bid Now {'>'}</Button>
                        </div>
                    </Col>
                    <Col span={1}></Col>
                </>


            ))}
        </Row>
    )
};

export default AuctionCards;
