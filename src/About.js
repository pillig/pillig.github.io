import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;



export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Title className="about-title" level={2}>About Me</Title>
        <div className="about-body">
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
