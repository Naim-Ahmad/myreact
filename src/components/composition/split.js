import React from "react";

import About from "./about";

export default function Split(){
    return (
        <About left={
            <h1>Chat</h1>
        }
        right={
            <h1>Contact</h1>
        } />
    )
}