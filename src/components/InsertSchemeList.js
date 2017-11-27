import React from 'react';
import { Row, Col, Input, Button } from 'antd';


export class InsertSchemeList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row>
          <Col span={6}><h3>Scheme Id:</h3> </Col>
          <Col span={12}><Input placeholder="please input scheme id" /></Col>
        </Row>
        <Row><h3>Scheme description:</h3></Row>
        <Row>
          <Col span={20}><Input.TextArea autosize={{ minRows: 5, maxRows: 15 }} /></Col>
        </Row>
        <br/>
        <Row><Button type="primary">Insert</Button></Row>
      </div>
    );
  }
}
