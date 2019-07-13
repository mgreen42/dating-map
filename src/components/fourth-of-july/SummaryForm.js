import React from 'react';

export default class SummaryForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.answers);
        {this.props.onSubmit()};
    };
    render() {
        return (
            <div>
                <p>Your favorite color is {this.props.answers.one} because {this.props.answers.two}</p>
                <button onClick={this.onSubmit}>Great!</button>
            </div>
        )
    }
}