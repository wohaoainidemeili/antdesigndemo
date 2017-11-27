import React from 'react';
import { Row, Col, Input, Button } from 'antd';


export class InsertDataList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row>
          <Col span={6}><h3>Data Id:</h3> </Col>
          <Col span={12}><Input placeholder="please input data id" /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>access reference:</h3> </Col>
          <Col span={12}><Input placeholder="please input reference" /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>time:</h3> </Col>
          <Col span={12}><Input placeholder="please input time" /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>space:</h3> </Col>
          <Col span={12}><Input placeholder="please input space" /></Col>
        </Row>
        <Row>
          <Col span={6}><h3>access method:</h3> </Col>
          <Col span={12}><Input placeholder="please input access method" /></Col>
        </Row>
        <br />
        <Row><Button type="primary">Insert</Button></Row>
      </div>
    );
  }
}
