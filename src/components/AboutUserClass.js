import React from "react";

class AboutUserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            personInfo:{
                name: "",
                location: "",
            },
        };

    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/Ch-Praneeth1");

        const json = await data.json();

        this.setState({
            personInfo: json,
        });

        // console.log(json);
    }

    componentDidUpdate(){
        console.log("component updated");
    };

    componentWillUnmount(){
      console.log("component un-mounted");
    };

    render(){

        const {name, location, avatar_url, bio} = this.state.personInfo;
        return(
            <div className="aboutuser">
                


                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,          //updating a state variable in class base component using setState function given us by react
                    })
                }}>Add</button> */}

                <img src={avatar_url}></img>
                <h3>{name}</h3>
                <h4>{location}</h4>
                <p>{bio}</p>
                <p>contact:- 000-0000-000</p>
            </div>
        );
    };
};


export default AboutUserClass;