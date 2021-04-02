import React, { Component } from 'react';
import './new-quote.css';

class NewQuote extends Component {
    render() {
      return (
        <div className="inline">
          <button 
            onClick={() => this.props.onClick()}
            style={buttonStyle(this.props.color)}
            className="Button shadowButton"
          >
            New Quote
          </button>
        </div>
      );
    }
  }

  function buttonStyle(propColor) {
      var color = propColor;
      return {
          backgroundColor: color
      }
  }
  
  export default NewQuote;