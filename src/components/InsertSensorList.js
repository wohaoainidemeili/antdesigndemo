import React from 'react';
import { Row, Col, Input, Button } from 'antd';


export class InsertSensorList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row>
          <Col span={6}><h3>Sensor Id:</h3> </Col>
          <Col span={12}><Input placeholder="please input sensor id" /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>Sensor Planning Service:</h3> </Col>
          <Col span={12}><Input placeholder="please input sps" /></Col>
        </Row>
        <br />
        <Row><Button type="primary">Insert</Button></Row>
      </div>
    );
  }
}
