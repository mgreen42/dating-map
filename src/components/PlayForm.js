import React from 'react';

export default class PlayForm extends React.Component {
    setAnswer = (e) => {
        const answer = e.target.id;
        this.onSubmit(e, answer);
    };
    onSubmit = (e, answer) => {
        e.preventDefault();
        {this.props.onSubmit({answer})};
    };
    render() {
        return (
            <div>
                <p>What is your favorite color?</p>
                <button id="a" onClick={this.setAnswer}>Red</button>
                <button id="b" onClick={this.setAnswer}>White</button>
                <button id="c" onClick={this.setAnswer}>Blue</button>
            </div>
        )
    }
}