import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { AddAuInputList } from './AddAuInputList';

export class UpdateAuList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row><h1>Query Conditions</h1></Row>
        <br/>
        <Row>
          <Col span={6}><h3>Auxiliary information Id:</h3> </Col>
          <Col span={6}><Input placeholder="please input auxiliary information id" /></Col>
          <Col span={1}/>
          <Col span={6}><Button type="primary">Query</Button></Col>
        </Row>
        <br/>
        <hr />
        <br />
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
        <Row><Button type="primary">Update</Button></Row>
      </div>
    );
  }
}
