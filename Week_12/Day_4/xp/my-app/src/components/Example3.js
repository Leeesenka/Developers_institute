import React from "react";
import jsonData from './data.json'
class Example2 extends React.Component {
    constructor(props){
        super(props);
    }
   
    render(){
    
        const Experiences = jsonData.Experiences.map((skill, index) => 
        <div key={index}>
            <img src={skill.logo}></img>
            <p>{skill.companyName}</p>

            <ul>
                {skill.roles.map((skillSetItem, skillIndex) => 
                    <li key={skillIndex}><h3>{skillSetItem.title} </h3>{skillSetItem.startDate}{skillSetItem.location}<p>{skillSetItem.description}</p></li>
                    
                )}
            </ul> 
         </div>
    );
        

        return(
            <div>

                <ul>
                <li>{Experiences}</li>
                </ul>
           
            </div>
        );
    }
}

export default Example2;
