import React, { Component } from 'react';
import './quote-text.css';

class QuoteText extends Component {
    render() {
      return (
        <div>
            <p className="Quote-text" style={textStyle(this.props.color)}>
                <i className="fa fa-quote-left"></i>{this.props.quote}
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
  
  export default QuoteText;