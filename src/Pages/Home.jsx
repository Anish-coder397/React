import React from "react";
class Home extends React.Component{
render(){
    return(
        <>
        <h1>Hello My Name is {this.props.name} ,my age is {this.props.age}</h1>
        </>
    )
}

}
export default Home;