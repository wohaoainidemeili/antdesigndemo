import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import {AddAuInputList} from "./AddAuInputList";

export class InsertAuList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row>
          <Col span={6}><h3>Auxiliary information Id:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>Digital Elevation Model (DEM) database:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>socio-economic database:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>A hydrology database:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={18}><AddAuInputList /></Col>
        </Row>
        <br />
        <Row><Button type="primary">Insert</Button></Row>
      </div>
    );
  }
}
