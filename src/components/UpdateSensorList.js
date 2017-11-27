import React from 'react';
import { Row, Col, Input, Button } from 'antd';

export class UpdateSensorList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row><h1>Query Conditions</h1></Row>
        <Row>
          <Col span={6}><h3>Sensor Id:</h3></Col>
          <Col span={6}><Input placeholder="please input sensor id" /></Col>
          <Col span={1}/>
          <Col span={6}><Button type="primary">Query</Button></Col>
        </Row>
        <br/>
        <hr/>
        <br/>
        <Row>
          <Col span={6}><h3>Sensor Id:</h3> </Col>
          <Col span={12}><Input placeholder="please input sensor id" /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>Sensor Planning Service:</h3> </Col>
          <Col span={12}><Input placeholder="please input sps" /></Col>
        </Row>
        <br />
        <Row><Button type="primary">Update</Button></Row>
      </div>
    );
  }
}
