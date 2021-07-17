import React, { Component, MouseEvent, ReactNode } from "react";

interface IMouseProps{
    //render?(state:IMouseState):ReactNode
    children?(state:IMouseState):JSX.Element
}

interface IMouseState{
    x:number;
    y:number;
}

export default class Mouse extends Component<IMouseProps,IMouseState>{

    constructor(props:IMouseProps){
        super(props);

        this.state={
            x:0,
            y:0
        };
    }

    private HandleMouseEvent=(event:MouseEvent):void => {
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }



    public render(){
        return (
            <React.Fragment>
                <div
                    style={{height:'100vh', width:'100vm'}}
                    onMouseMove={this.HandleMouseEvent}
                    >
                    {this?.props?.children!(this.state)!}
                </div>
            </React.Fragment>
        )
    }
}