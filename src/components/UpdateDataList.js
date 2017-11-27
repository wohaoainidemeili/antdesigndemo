import React from 'react';
import { Row, Col, Input, Button } from 'antd';
export class UpdateDataList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row><h1>Query Conditions</h1></Row>
        <Row>
          <Col span={6}><h3>Data Id:</h3></Col>
          <Col span={6}><Input placeholder="please input data Id" /></Col>
          <Col span={1}/>
          <Col span={6}><Button type="primary">Query</Button></Col>
        </Row>
        <br/>
        <hr/>
        <br/>
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
        <Row><Button type="primary">Update</Button></Row>
      </div>
    );
  }
}
