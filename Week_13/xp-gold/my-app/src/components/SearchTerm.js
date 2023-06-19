import React from 'react';
import { connect } from 'react-redux';
import { searchState } from '../redux/actions';

class SearchTerm  extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  renderList() {
    const filteredTitles = this.props.titles.filter(title => 
      title.title.toLowerCase().includes(this.state.term.toLowerCase())
    );

    return filteredTitles.map(items => {
      return (
        <div key={items.title}>
      
          <a href={items.url}>{items.title}</a>

        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange} value={this.state.term}/>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { titles: state.titles };
};

export default connect(mapStateToProps,{ searchState })(SearchTerm);
