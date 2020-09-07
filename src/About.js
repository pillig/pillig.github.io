import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;



export default class About extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <div className="about-title panel-header title title-bar">About Me</div>
        <div className="about-body inner-panel">
          <Paragraph>
              Hey there, I'm Parker.
          </Paragraph>
          <Paragraph>
            I'm a software engineer currently working in Boulder, Colorado.
          </Paragraph>
          <Paragraph>
            This page serves as a way to present my day-to-day interests 
            through what I've learned over the years.
          </Paragraph>
        </div>  
      </div>
    )
  }
}
