import React from 'react';

export default class PlayForm extends React.Component {
    setAnswer = (e) => {
        const answer = e.target.value;
        const id = e.target.id == "1" ? 1 : 2;
        console.log('answer: ', answer, 'id: ', id);
        this.onSubmit(answer, e, id);
    };
    onSubmit = (answer, e, id) => {
        e.preventDefault();
        this.props.onSubmit(answer, id);
    };
    render() {
        if(this.props.progress.one == "unknown"){
            return (
                <div>
                    <p>What is your favorite color?</p>
                    <button value="red" id="1" onClick={this.setAnswer}>Red</button>
                    <button value="white" id="1" onClick={this.setAnswer}>White</button>
                    <button value="blue" id="1" onClick={this.setAnswer}>Blue</button>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Why is {this.props.progress.one} your favorite color?</p>
                    <button value="it is pretty!" id="2" onClick={this.setAnswer}>it is pretty!</button>
                    <button value="dunno" id="2" onClick={this.setAnswer}>dunno</button>
                    <button value="stop asking questions!" id="2" onClick={this.setAnswer}>stop asking questions!</button>
                </div>
            )
        }
    }
}