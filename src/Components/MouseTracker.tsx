import React, { Component } from "react";
import Cat from "./Cat";
import Mouse from "./Mouse";

export default class MouseTracker extends Component{

    public render(){
        return (
            <React.Fragment>
                <h1>Move the mouse around!</h1>
                <Mouse>
                    {(mouseState)=> mouseState && (
                        <Cat x={mouseState.x} y={mouseState.y}></Cat>
                    )}
                </Mouse>
            </React.Fragment>
        )
    }
}