import React from 'react';
import { connect } from 'react-redux';

class MovieDetails extends React.Component {
  render() {
    if (!this.props.selectedMovie) {
      return <div>Select a Movie</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <p>Title: {this.props.selectedMovie.title}</p>
        <p>Release Date: {this.props.selectedMovie.releaseDate}</p>
        <p>Rating: {this.props.selectedMovie.rating}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedMovie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);
