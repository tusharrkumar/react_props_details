import React from 'react';

class Logo extends React.Component{
    constructor(props){
        super(props)
        this.fruits=props.fruits
    }
    render(){
        return(
            <>
                {console.log(this.props)}
                <h1>Logo Component (class Based component)</h1>
                <h2>1st props >> Name : {this.props.name}</h2>

                {this.fruits.map((value)=>{
                    return (<li>{value}</li>)
                })}
            </>
        )
    }
}

export default Logo;