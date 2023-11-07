import React from "react";

class AboutUserClass extends React.Component{

    constructor(props){
        super(props)


    }

    
    render(){
        return(
            <div className="AboutUser">
                <h3>{this.props.name}</h3>
                <h4>{this.props.location}</h4>
                <p>contact:- 000-0000-000</p>
            </div>
        );
    };
};

export default AboutUserClass;