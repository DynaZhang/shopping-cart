import React from 'react';
import {sumBy} from 'lodash';
import {observer} from 'mobx-react';
import './Basket.css';
import BasketItem from './BasketItem';


const Basket = observer((props) => {
    const handleAddApple = () => {
        props.basket.pushApple();
    }

    const handleEatApple = (id) => {
        console.log(id)
        props.basket.setAppleStatus(id);
    }

    return (
        <div className="basket-wrapper">
            <h3 className="basket-title">苹果篮子</h3>
            <div className="basket-state-wrapper">
                <div className="state-item">
                    <h5>当前</h5>
                    <p>{props.basket.willEatApple.length}个苹果，{sumBy(props.basket.willEatApple, 'weight')}克</p>
                </div>
                <div className="state-item">
                    <h5>已吃掉</h5>
                    <p>{props.basket.eatenApple.length}个苹果，{sumBy(props.basket.eatenApple, 'weight')}克</p>
                </div>
            </div>
            <ul className="basket-list-wrapper">
                {
                    props.basket.appleList.map((item, index) => !item.isEaten ? (
                        <BasketItem 
                            key={item.id} 
                            id={item.id}
                            index={index}
                            weight={item.weight} 
                            onEat={handleEatApple} />
                    ) : null)
                }
            </ul>
            {/* <div className="basket-list-empty">苹果篮子空空如也</div> */}
            <div className="basket-btn-wrapper">
                <button type="button" className="basket-add-btn" onClick={handleAddApple}>摘苹果</button>
            </div>
        </div>
    )
});

export default Basket;