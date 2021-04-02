import React, { Component } from 'react';
import './quote-container.css';
import QuoteText from './quote-text/quote-text';
import QuoteAuthor from './quote-author/quote-author';
import NewQuote from './new-quote/new-quote';
import MediaButton from './media-button/media-button';

class QuoteContainer extends Component {
    render() {
      return (
        <div className="Quote shadow">
            <QuoteText 
              quote={this.props.quote.quote}
              color={this.props.color}
            />
            <QuoteAuthor 
              author={this.props.quote.attrib}
              color={this.props.color}
            />
            <MediaButton 
              color={this.props.color}
              title="Tweet this quote!"
              icon="fa fa-twitter"
            />
            <MediaButton 
              color={this.props.color}
              title="Post this quote on tumblr!"
              icon="fa fa-tumblr"
            />
            <NewQuote 
              color={this.props.color}
              onClick={() => this.props.onClick()}
            />
        </div>
      );
    }
  }
  
  export default QuoteContainer;