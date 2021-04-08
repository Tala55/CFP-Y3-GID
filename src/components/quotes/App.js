import React, { Component } from 'react';
import QuoteContainer from './quote-container/quote-container.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        "attrib": "Alan Lakein",
        "quote": "Time = life; therefore, waste your time and waste of your life, or master your time and master your life."
      },
      color: '#B01C34 ',
    };
  }
  handleClick() {
    var quote = generateQuote();
    var color = generateColor();
    document.body.style =  color + ';';
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
      "attrib": "Jim Rohn",
      "quote": "Time is more valuable than money. You can get more money, but you cannot get more time."
    }, {
      "attrib": " Mozart",
      "quote": " The shorter way to do many things is to only do one thing at a time."
    }, {
      "attrib": "William Shakespeare",
      "quote": "Better to be three hours too soon, than a minute too late."
    }, {
      "attrib": "Mother Teresa",
      "quote": "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin."
    }, {
      "attrib": "Shoppenhauer",
      "quote": "The common man is not concerned about the passage of time, the man of talent is driven by it."
    }, {
      "attrib": "Stephen R. Covey",
      "quote": "The key is in not spending time, but in investing it."
    }, {
      "attrib": "Steven Covey",
      "quote": "Most of us spend too much time on what is urgent, and not enough time on what is important"
    }, {
      "attrib": "Thomas Edison",
      "quote": "Time is really the only capital that any human being has, and the only thing he can't afford to lose"
    }, {
      "attrib": "Golda Meir",
      "quote": "I must govern the clock, not be governed by it."
    },
  ];
  var quoteNumb = Math.floor(Math.random() * quotes.length);
  
  return quotes[quoteNumb];
}
function generateColor() {
  const colors = [
    // بني
    '#170b85   ',
    // رمادي 
    '#cf4c00 ',
    // (كجلبي)
    '#3e4659',
// تركوازي غغامق
     '#00d1c0',
    //  ازرق فاتح
     '#00d1c0',
    //  فستقي
     '#cf0485',
    //  ازرقاني
     '#1fcf04',
     '#c9d400'
  ];
  var colorNumb = Math.floor(Math.random() * colors.length);  
  
  return colors[colorNumb];
}
