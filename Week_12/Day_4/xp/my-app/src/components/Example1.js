import React from "react";
import jsonData from './data.json'
class Example1 extends React.Component {
    constructor(props){
        super(props);
    }
   
    render(){
    
    const SocialMedias = jsonData.SocialMedias.map((socialMedia, index) => 
            <li key={index}><a href={socialMedia}>{socialMedia}</a></li>
        );

        return(
            <div>

                <ul>
                <li>{SocialMedias}</li>
                </ul>
           
            </div>
        );
    }
}

export default Example1;
