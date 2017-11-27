import React from 'react';
import { Row, Col, Input, Button } from 'antd';

export class UpdateSchemeList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row><h1>Query Conditions</h1></Row>
        <br/>
        <Row>
          <Col span={6}><h3>Scheme Id:</h3> </Col>
          <Col span={6}><Input placeholder="please input scheme id" /></Col>
          <Col span={1}/>
          <Col span={6}><Button type="primary">Query</Button></Col>
        </Row>
        <br/>
        <hr />
        <br />
        <Row>
          <Col span={6}><h3>Scheme Id:</h3> </Col>
          <Col span={12}><Input placeholder="please input scheme id" /></Col>
        </Row>
        <Row><h3>Scheme description:</h3></Row>
        <Row>
          <Col span={20}><Input.TextArea autosize={{ minRows: 5, maxRows: 15 }} /></Col>
        </Row>
        <br />
        <Row><Button type="primary">Update</Button></Row>
      </div>
    );
  }
}
