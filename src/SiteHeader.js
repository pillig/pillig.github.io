import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export default class SiteHeader extends Component {

  render() {

    const menu = (
      <Menu className="project-menu inner-panel">
        <Menu.ItemGroup className="project-title" title="CSCI 3308 - Software Development & Tools">
          <Menu.Item><a href="https://github.com/pillig/CSCI3308Project">Your Yelp</a></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup className="project-title" title="CSCI 4502 - Data Mining">
          <Menu.Item><a href="https://github.com/taylorjandrews/GitCu">GitCU</a></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup className="project-title" title="CSCI 4830 - Big Data HCI">
          <Menu.Item><a href="https://github.com/pillig/book">Book 1</a></Menu.Item>
          <Menu.Item><a href="https://github.com/pillig/book2">Book 2</a></Menu.Item>
          <Menu.Item><a href="https://github.com/pillig/book3">Book 3</a></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup className="project-title" title="Personal">
          <Menu.Item><a href="https://github.com/pillig/back-bot">Back-bot</a></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
 
    return (
      <div className="header-container title">
        <div className="header-left">
          <Title className="title" level={2}>
            Parker Illig
          </Title>
        </div>
        <div className="header-right">
          <Dropdown overlay={menu}>
            <div>
              Projects <DownOutlined/>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}
