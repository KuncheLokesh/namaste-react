import React from "react";

class UserClassComponent extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }


    render(){
        return (
            <div className="functional-component">
                <div>
                    hii this is functional component 
                </div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>increase</button>

            </div>
        )
    }
}

export default UserClassComponent;