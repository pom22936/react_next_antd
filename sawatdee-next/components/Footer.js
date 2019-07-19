import React,{Component} from "react";
import {observer} from "mobx-react";

@observer
class MyFooter extends Component{
    constructor(props){
        super(props)
    }

    increase = () => {
        this.props.stock.increase();
    }
    decrease = () => {
        this.props.stock.decrease();
    }

    render() {
        return (
            <div>
                <button className="increase" onClick={this.increase}>+</button>
                <button className="decrease" onClick={this.decrease}>-</button>
                 <p>Palm Phongsakon Design ©2019 </p> 
                 {this.props.stock.counter}
            </div>
        )
    }
}

export default MyFooter