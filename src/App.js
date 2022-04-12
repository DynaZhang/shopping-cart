import React from 'react';
import './App.css';
import Basket from './components/Basket';
import BasketStore from './store/basketStore';

const basketStore = new BasketStore([]);

function App() {
    return (
        <div className="App">
            <Basket basket={basketStore}/>
        </div>
    );
}

export default App;
