import React, { Component } from 'react';
import './quote-author.css';

class QuoteAuthor extends Component {
    render() {
      return (
        <div>
            <p className="Quote-author" style={textStyle(this.props.color)}>
                - {this.props.author}
            </p>
        </div>
      );
    }
  }

  function textStyle(propColor) {
      var color = propColor;
      return {
          color: color
      }
  }
  
  export default QuoteAuthor;