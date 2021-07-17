import { Component } from "react";

interface ICatProps{
    x:number;
    y:number;
}

export default class Cat extends Component<ICatProps,{}>{

    constructor(props:ICatProps){
        super(props);
    }

    render() {
        return (
          <img src="https://toppng.com/uploads/preview/cat-11525956124t37pf0dhfz.png" style={ { position: 'absolute', left: this.props.x, top: this.props.y, height:'200px', width:'200px' } } />
        );
      }

}

