import React from "react";
import _ from 'lodash';
import {Key} from './Key';
import './Piano.css'
import {NOTES, KEY_TO_NOTE, VALID_KEYS} from '../components/global/constants'

class Piano extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    handleKeyDown = (event) =>{
        if(event.repeat){
            return;
        }

        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)){
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
    }

    componentDidMount = () =>{
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render(){
        const keys = _.map(NOTES, (note, index) =>{
            return(
                <Key
                    key={index}
                    note={note}
                    pressedKeys ={this.state.pressedKeys}
                />
            );
        });

       return(
        <div className="piano">
            {keys}
        </div>
       );
    }
}

export{Piano}