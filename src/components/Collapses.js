import React, { Component } from 'react'
import { Collapse } from 'antd';

export class Collapses extends Component {

    render() {
        const { Panel } = Collapse;

        function callback(key) {
        console.log(key);
        }

        const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;
        return (
            <div>
                <Collapse onChange={callback}>
                    <Panel header="This is panel header 1" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="This is panel nest panel" key="1">
                            <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                           <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Collapses
