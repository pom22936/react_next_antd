import Layouts from '../components/Layouts';
import React,{Component} from "react";
import axios from 'axios';
import { Card } from 'antd';
import LoaderContent from '../components/contentLoader';
import Stock from "../Services/Stock";
import {observer} from "mobx-react";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


@observer
class SubContent extends Component{
    constructor(props){
        super(props)
    }

    setdata = () => {
        this.props.stocks.setdata(this.props.data)
    }

    render() {
        return (
            <div>
                <button className="increase" onClick={this.setdata}>set data</button>
            </div>
        )
    }
}

class Index extends Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        const url = API_URL;
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ posts: data })
         })
    }

    render() {
        if(this.state.posts.length === 0){
            return (<Layouts><div>null data</div></Layouts>)
        }
        return (
            <div>
                <Layouts>
                    <div>
                        <h1>React fetch data post</h1>
                        <SubContent stocks={Stock} data={this.state.posts}/>
                        <div>
                            {
                                this.state.posts.map((post) => (
                                <div>
                                    <Card title={post.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>{post.body}</p>
                                    </Card>
                                </div>
                            ))
                            }
                        </div>
                        <LoaderContent/>
                    </div>
                </Layouts>
            </div>
        )
    }
}

export default Index