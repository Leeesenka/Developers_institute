import React from "react";
import jsonData from './posts.json'
class PostList extends React.Component {
    constructor(props){
        super(props);
    }
   
    render(){
    
        const title = jsonData.map((post) => <div key={post.id}><h3>{post.title}</h3><p>{post.content}</p></div>);

        return(
            <div>
                <>{title}</>
           
            </div>
        );
    }
}

export default PostList;
