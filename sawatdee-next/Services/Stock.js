import {observable,autorun} from "mobx";

let a = [];

class Stock{
    @observable data = ["dragonQuest","finalFantasy"];
    @observable counter = 0;
    @observable rest = [];

    increase() {
        this.counter = this.counter + 1;
    }
    decrease() {
        this.counter = this.counter - 1;
    }

    setdata(val) {
        console.log(val);
        a.push(val)
        console.log(a)
        // let test = observable([])
        // test.push(val)
        // console.log(test)
    }



}


let stock = new Stock;

export default stock;

// autorun(()=>{
    
// });