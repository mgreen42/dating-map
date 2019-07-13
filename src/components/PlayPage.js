import React from 'react';
import { connect } from 'react-redux';
import PlayForm from './PlayForm';
import { startAddAnswer } from '../actions/progress';

export class PlayPage extends React.Component {
  onSubmit = (answer) => {
    this.props.startAddAnswer(this.props.game.id, answer);
    this.props.history.push('/dashboard');
  };
//   onRemove = () => {
//     this.props.startRemoveExpense({ id: this.props.expense.id });
//     this.props.history.push('/dashboard');
//   };
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
  game: state.games.find((game) => game.id === 1)
});

const mapDispatchToProps = (dispatch, props) => ({
  startAddAnswer: (gameId, answer) => dispatch(startAddAnswer(gameId, answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
