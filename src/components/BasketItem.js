import React from 'react';
import './BasketItem.css';
import appleIcon from '../assets/images/apple.png';

function BasketItem(props) {
    const handleEat = () => {
        props.onEat(props.id);
    }

    return (
        <li className="basket-item">
            <div className="basket-item-info">
                <img src={appleIcon} className="basket-item-info-img" alt="apple"/>
                <div className="basket-item-info-wrapper">
                    <h3>红苹果-{props.index + 1}号</h3>
                    <p>{props.weight}克</p>
                </div>
            </div>
            <button type="button" className="basket-item-btn" onClick={handleEat}>吃掉</button>
        </li>
    )
}

export default BasketItem;