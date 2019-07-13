import React from 'react';
import { connect } from 'react-redux';
import { startAddAnswer } from '../actions/progress';
import GameItem from './GameItem';


export class GameList extends React.Component {
    addAnswer = (e) => {
        e.preventDefault();        
        const answer = document.getElementById("answer-box").value;
        this.props.startAddAnswer(answer);
    };
    render() {
        return (
            <div>
                Games Here
                {this.props.games.map((game) => {
                    return <GameItem key = {game.id} {...game} ></GameItem>
                })}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  startAddAnswer: (answer) => dispatch(startAddAnswer(answer))
});

const mapStateToProps = (state) => {
  return {
    games: state.games,
    answers: state.progress
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
