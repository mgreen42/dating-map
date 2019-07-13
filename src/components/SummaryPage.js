import React from 'react';
import { connect } from 'react-redux';
import SummaryForm from './fourth-of-july/SummaryForm';
import { startResetAnswers } from '../actions/progress';

export class SummaryPage extends React.Component {
  onSubmit = () => {
    this.props.startResetAnswers('fourth-of-july');
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <SummaryForm
          game={this.props.game}
          answers={this.props.answers}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  game: state.games.find((game) => game.id === props.match.params.id),
  answers: state.progress
});

const mapDispatchToProps = (dispatch) => ({
  startResetAnswers: (gameId) => dispatch(startResetAnswers(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);
