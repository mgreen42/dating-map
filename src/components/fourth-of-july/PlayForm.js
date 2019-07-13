import React from 'react';

export default class PlayForm extends React.Component {
    setAnswer = (e) => {
        const answer = e.target.id;
        this.onSubmit(answer, e);
    };
    onSubmit = (answer, e) => {
        e.preventDefault();
        this.props.onSubmit(answer, 1);
    };
    render() {
        return (
            <div>
                <p>What is your favorite color?</p>
                <button id="red" onClick={this.setAnswer}>Red</button>
                <button id="white" onClick={this.setAnswer}>White</button>
                <button id="blue" onClick={this.setAnswer}>Blue</button>
            </div>
        )
    }
}