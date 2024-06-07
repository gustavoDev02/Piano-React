import React from "react";
import _ from 'lodash';
import { Key } from './Key';
import './Piano.css';
import { NOTES, KEY_TO_NOTE, VALID_KEYS } from '../components/global/constants';

class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    }

    handleKeyDown = (event) => {
        if (event.repeat) {
            return;
        }

        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.filter((_, i) => i !== index)
            }));
        }
    }

    handleClick = (note) => {
        this.playNote(note);
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
                    onClick={this.handleClick}
                />
            );
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio
                    id={note}
                    key={index}
                    src={`notes/${note}.mp3`}
                />
            );
        });

        return (
            <div>
                <div className="piano">
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </div>
        );
    }
}

export { Piano };
