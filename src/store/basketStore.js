import {makeObservable, observable, computed, action} from 'mobx';


class BasketStore {
    appleList = [];

    constructor(appleList) {
        makeObservable(this, {
            appleList: observable,
            pushApple: action,
            setAppleStatus: action,
            willEatApple: computed,
            eatenApple: computed
        });
    }

    pushApple() {
        this.appleList.push({
            id: new Date().getTime(),
            weight: Math.floor(Math.random() * 100 + 200),
            isEaten: false
        });
    }

    setAppleStatus(id) {
        const index = this.appleList.findIndex(item => item.id === id);
        if (index > -1) {
            this.appleList[index].isEaten = true;
        }
    }

    get willEatApple() {
        return this.appleList.filter(item => !item.isEaten);
    }

    get eatenApple() {
        return this.appleList.filter(item => item.isEaten);
    }
}

export default BasketStore;