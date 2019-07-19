import {observable,autorun} from "mobx";
import axios from 'axios';

class Stock{
    @observable data = ["dragonQuest","finalFantasy"];
    @observable counter = 0

    increase() {
        this.counter = this.counter + 1;
    }
    decrease() {
        this.counter = this.counter - 1;
    }
}


let stock = new Stock;

export default stock;