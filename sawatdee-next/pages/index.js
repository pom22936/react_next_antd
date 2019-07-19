import Layouts from '../components/Layouts';
import React,{Component} from "react";
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

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
          console.log(this.state.posts)
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
                        <div>
                            {
                                this.state.posts.map((post) => (
                                <div>
                                    <p>{post.id} : {post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </Layouts>
            </div>
        )
    }
}

export default Index