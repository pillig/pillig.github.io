import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;



export default class About extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <div className="about-title title title-bar">About Me</div>
        <div className="about-body inner-panel">
          <Paragraph>
              Hey there, I'm Parker.
          </Paragraph>
          <Paragraph>
            I'm a software engineer currently working in Boulder, Colorado.
          </Paragraph>
        </div>  


      </div>
    )
  }
}
