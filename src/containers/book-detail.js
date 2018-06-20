import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component {
  render() {
    if(!this.props.book) {
      return (
        <div>Select a book to view its details</div>
      );
    };
    return (
      <div>
        <h3><em>Selected book details</em></h3>
        <div>Title: {this.props.book.title}</div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(ActiveBook)
