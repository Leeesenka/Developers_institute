import React from "react";
import jsonData from './data.json'
class Example2 extends React.Component {
    constructor(props){
        super(props);
    }
   
    render(){
    
        const Skills = jsonData.Skills.map((skill, index) => 
        <div key={index}>
            <p>{skill.Area}</p>
            <ul>
                {skill.SkillSet.map((skillSetItem, skillIndex) => 
                    <li key={skillIndex}>{skillSetItem.Name}</li>
                )}
            </ul>
         </div>
    );
        

        return(
            <div>

                <ul>
                <li>{Skills}</li>
                </ul>
           
            </div>
        );
    }
}

export default Example2;
