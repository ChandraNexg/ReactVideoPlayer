import React, { Component } from 'react'
import { Slider } from 'antd';
import { Card } from 'antd';
import { BsLightning } from "react-icons/bs";
import { BsFilm } from "react-icons/bs";
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import Collapse from './Collapses';


export class Properties extends Component {
    render() {

        function onChange(value) {
          console.log('onChange: ', value);
        }
        
        function onAfterChange(value) {
          console.log('onAfterChange: ', value);
        }
        return (
            <div>
                <Card bordered={true} style={{ width: 285 }}>
                    <Row>
                        <Col span={12}>
                        <h4>CLIP PROPERTIES</h4> 
                        </Col>
                        <Col span={12} >
                        <div style={{float:'right'}}>
                        <BsLightning/>
                        </div>
                        </Col>
                    </Row>
                    <div className='volumeSlider'>
                        <h4><BsFilm/><span>iphone-x-home-screen.mp4</span></h4>
                    </div>
                    <div className='volumeSlider'>
                        <h4>Volume</h4>
                    <Slider defaultValue={50} onChange={onChange}  onAfterChange={onAfterChange} />
                    </div>
                    <div className='volumeSlider'>
                        <h4>Opacity</h4>
                    <Slider defaultValue={100} onChange={onChange} onAfterChange={onAfterChange} />
                    </div>  
                    <div className='volumeSlider'>
                        <h4>Size</h4>
                    <Slider defaultValue={35} onChange={onChange} onAfterChange={onAfterChange} />
                    </div>  
                    <div className='volumeSlider'>
                        <h4>Position(X)</h4>
                    <Slider defaultValue={75} onChange={onChange} onAfterChange={onAfterChange} />
                    </div>  
                    <div className='volumeSlider'>
                        <h4>Position(Y)</h4>
                    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
                    </div>   
        
                </Card>
                <div className='volumeSlider2'>
                    <h4>TRACK PROPERTIES</h4>
                    <div>
                    <h4>B-roll</h4>
                    </div>
                    <div className='volumeSlider'>
                       <h4>Volume</h4>
                       <Slider defaultValue={50} onChange={onChange}  onAfterChange={onAfterChange} />
                    </div>
                    <div className='volumeSlider'>
                       <h4>Pan</h4>
                       <Slider defaultValue={100} onChange={onChange} onAfterChange={onAfterChange} />
                       <Checkbox checked>Mute Track</Checkbox><br/>
                       <Checkbox>Solo Track</Checkbox><br/>
                       <Checkbox>Ducking</Checkbox>  
                    </div> 
                    <div className='volumeSlider'>
                       <Button type="primary">Add Effect</Button>
                    </div>
                </div>
                <div className='volumeSlider3'>
                    <Collapse/>
                </div>  
            </div>
        )
    }
}

export default Properties
