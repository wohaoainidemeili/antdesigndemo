import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import {AddModelInputList} from "./AddModelInputList";
import {AddModelOutputList} from "./AddModelOutputList";

export class InsertModelList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row>
          <Col span={6}><h3>Model Id:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>Theme:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>space accuracy:</h3> </Col>
          <Col span={12}><Input/></Col>
        </Row>
        <Row>
          <Col span={6}><h3>time accuracy:</h3> </Col>
          <Col span={12}><Input/></Col>
        </Row>
        <Row>
          <Col span={6}><h3>numeric accuracy:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <Row>
          <Col span={18}><AddModelInputList/></Col>
        </Row>
        <Row>
          <Col span={18}><AddModelOutputList/></Col>
        </Row>
        <Row>
          <Col span={6}><h3>executable parameters:</h3> </Col>
          <Col span={12}><Input /></Col>
        </Row>
        <br />
        <Row><Button type="primary">Insert</Button></Row>
      </div>
    );
  }
}
