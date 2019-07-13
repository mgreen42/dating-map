import React from 'react';
import { connect } from 'react-redux';
import PlayForm from './fourth-of-july/PlayForm';
import { startAddAnswer } from '../actions/progress';

export class PlayPage extends React.Component {
  onSubmit = (answer, id) => {
    this.props.startAddAnswer(this.props.game.id, id, answer);
    setTimeout(() => {this.props.history.push("/play/:id/summary")}, 20);
  };
  render() {
    return (
      <div>
        <PlayForm
          game={this.props.game}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  game: state.games.find((game) => game.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startAddAnswer: (gameId, id, answer) => dispatch(startAddAnswer(gameId, id, answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
