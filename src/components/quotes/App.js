import React, { Component } from 'react';
import QuoteContainer from './quote-container/quote-container.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        "attrib": "Steve Jobs",
        "quote": "Design is not just what it looks like and feels like. Design is how it works."
      },
      color: '#16a085',
    };
  }
  handleClick() {
    var quote = generateQuote();
    var color = generateColor();
    document.body.style = 'background: ' + color + ';';
    this.setState({
      quote: quote,
      color: color,
    });
  }

  render() {
    return (
      <div className="App">
       
        <QuoteContainer
          quote={this.state.quote}
          color={this.state.color}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default App;

function generateQuote() {
  const quotes = [
    {
      "attrib": "Steve Jobs",
      "quote": "Design is not just what it looks like and feels like. Design is how it works."
    }, {
      "attrib": "Steve Jobs",
      "quote": "Innovation distinguishes between a leader and a follower."
    }, {
      "attrib": "Albert Einstein",
      "quote": "Reality is merely an illusion, albeit a very persistent one."
    }, {
      "attrib": "Albert Einstein",
      "quote": "If you can't explain it simply, you don't understand it well enough."
    }, {
      "attrib": "Albert Einstein",
      "quote": "Strive not to be a success, but rather to be of value."
    }, {
      "attrib": "Steve Jobs",
      "quote": "Your time is limited, so don’t waste it living someone else’s life."
    }, {
      "attrib": "Bill Gates",
      "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
    }, {
      "attrib": "Albert Einstein",
      "quote": "Science without religion is lame, religion without science is blind."
    }, {
      "attrib": "Henry Ford",
      "quote": "Whether you think you can or you think you can’t, you’re right."
    },
  ];
  var quoteNumb = Math.floor(Math.random() * quotes.length);
  
  return quotes[quoteNumb];
}
function generateColor() {
  const colors = [
    '#16a085', 
    '#27ae60', 
    '#2c3e50', 
    '#f39c12', 
    '#e74c3c', 
    '#9b59b6', 
    '#FB6964', 
    '#342224', 
    '#472E32', 
    '#BDBB99', 
    '#77B1A9', 
    '#73A857',
  ];
  var colorNumb = Math.floor(Math.random() * colors.length);  
  
  return colors[colorNumb];
}
