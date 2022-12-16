import React from "react";
import Counter from "./Counter";
export default class User extends React.Component {
    render(){
        return <Counter render={(user)=> user ? 'sumit': 'No user'}/>
    }
}