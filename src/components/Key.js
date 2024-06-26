import React from "react";
import './Key.css';
import _ from 'lodash';
import { NOTE_TO_KEY } from '../components/global/constants';

class Key extends React.Component {
    noteIsFlat = (note) => {
        return note.length > 1;
    }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    }

    handleClick = () => {
        this.props.onClick(this.props.note);
    }

    render() {
        let keyClassName = "key";
        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
        if (noteIsFlat) {
            keyClassName += " flat";
        }
        if (keyIsPressed) {
            keyClassName += " pressed";
        }

        return (
            <div className={keyClassName} onClick={this.handleClick}>
                <div className="key-text">
                    {noteIsFlat ? null : this.props.note.toUpperCase()}
                </div>
            </div>
        );
    }
}

export { Key };
