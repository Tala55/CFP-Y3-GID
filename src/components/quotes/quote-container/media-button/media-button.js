import React, { Component } from 'react';
import './media-button.css';

class MediaButton extends Component {
    render() {
      return (
          <a style={anchorStyle(this.props.color)} className="Anchor inline shadowButton" target="_blank" title={this.props.title}>
            <i className={this.props.icon}></i>
          </a>
      );
    }
  }

  function anchorStyle(propColor) {
      var color = propColor;
      return {
          backgroundColor: color
      }
  }
  
  export default MediaButton;