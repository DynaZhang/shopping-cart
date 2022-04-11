import React from 'react';
import './Basket.css';
import BasketItem from './BasketItem';

function Basket({props}) {
    return (
        <div className="basket-wrapper">
            <h3 className="basket-title">苹果篮子</h3>
            <div className="basket-state-wrapper">
                <div className="state-item">
                    <h5>当前</h5>
                    <p>3个苹果，1111克</p>
                </div>
                <div className="state-item">
                    <h5>已吃掉</h5>
                    <p>3个苹果，1111克</p>
                </div>
            </div>
            <ul className="basket-list-wrapper">
                <BasketItem />
            </ul>
            {/* <div className="basket-list-empty">苹果篮子空空如也</div> */}
            <div className="basket-btn-wrapper">
                <button type="button" className="basket-add-btn">摘苹果</button>
            </div>
        </div>
    )
}

export default Basket;