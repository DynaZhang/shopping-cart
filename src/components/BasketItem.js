import React from 'react';
import './BasketItem.css';
import appleIcon from '../assets/images/apple.png';

function BasketItem(props) {
    return (
        <li className="basket-item">
            <div className="basket-item-info">
                <img src={appleIcon} className="basket-item-info-img" alt="apple"/>
                <div className="basket-item-info-wrapper">
                    <h3>红苹果-10号</h3>
                    <p>212克</p>
                </div>
            </div>
            <button type="button" className="basket-item-btn">吃掉</button>
        </li>
    )
}

export default BasketItem;