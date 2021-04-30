import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import { GrAdd,GrConfigure } from "react-icons/gr";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { BsTypeBold,BsTypeItalic,BsTypeStrikethrough,BsStop } from "react-icons/bs";
import {FiLink} from "react-icons/fi";
import {RiMessage2Line} from "react-icons/ri";
import {AiFillSound} from "react-icons/ai";
import { Divider } from 'antd';
import { Card } from 'antd';


export class VideoPlayer extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
              </Menu.Item>
            </Menu>
          );
        return (
            <div>
                <div>
                  <ReactPlayer controls width='700px' url='https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'/>             
                </div><br/>
               <div className='center'>
                  <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <GrAdd/><DownOutlined />
                        </a>
                  </Dropdown>&nbsp;
                  <Divider type="vertical" />
                  <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <GrConfigure/><DownOutlined />
                        </a>
                  </Dropdown>
                  <Divider type="vertical" />
                  <BsTypeStrikethrough/>&nbsp;
                  <BsTypeBold/>&nbsp;
                  <BsTypeItalic/>&nbsp;

                
                  <BsStop/>&nbsp;
                  <Divider type="vertical" />

                  <FiLink/>&nbsp;
                  <Divider type="vertical" />

                  <RiMessage2Line/>&nbsp;
               </div>
               <Card title="iOS 14 Review:It's About Time" bordered={false} style={{ width: '100%' }}>
                        <div>
                            <h4><AiFillSound /> &nbsp;Hey guys,it's been while.Coreen the Qeen here and i just want to talk about how a lot of people have been starting customize there iPhone home screens now that it final posible ios 14 out for everyone.I have to say,first of all,welcome to party we've customized home screens on phones fpr what seems like a decade now.</h4>
                        </div>
                </Card>
            </div>
        )
    }
}

export default VideoPlayer
