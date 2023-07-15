import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../redux/actions';

class Mountain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  componentDidMount() {
    this.props.setterm("mountain")
  }

  render() {
    const { list } = this.props;
    console.log('list', list)

    return (
      <div>
        <h1 style={{ fontFamily: 'revert' }}>Mountain</h1>
        <h1 style={{ fontFamily: 'revert' }}>Mountain</h1>
        {list.map((photo) => (
          <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5" key={photo.id}>
            <img src={photo.src.tiny} alt="Mountain" />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log('*******', state)
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: () => dispatch(getPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mountain);
