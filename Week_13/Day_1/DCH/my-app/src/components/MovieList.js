import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../redux/actions';

class MovieList extends React.Component {
  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div key={movie.title}>
          <div>{movie.title}</div>
          <button onClick={() => this.props.selectMovie(movie)}>
            details
          </button>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps,{ selectMovie })(MovieList);
