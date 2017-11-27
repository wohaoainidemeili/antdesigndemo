import React from 'react';
import { Row, Col, Input, Button } from 'antd';

export class DeleteList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <Row><h1>Delete Conditions</h1></Row>
        <Row>
          <Col span={8}><h3>Scheme Id:</h3> </Col>
          <Col span={8}><Input placeholder="please input scheme id" /></Col>
          <Col span={8}><Button type="primary">Query</Button>&nbsp;&nbsp;<Button type="primary">Delete</Button></Col>
        </Row>
        <Row>
          <Col span={8}><h3>Model Id:</h3></Col>
          <Col span={8}><Input placeholder="please input model id" /></Col>
          <Col span={8}><Button type="primary">Query</Button>&nbsp;&nbsp;<Button type="primary">Delete</Button></Col>
        </Row>
        <Row>
          <Col span={8}><h3>Data Id:</h3></Col>
          <Col span={8}><Input placeholder="please input data Id" /></Col>
          <Col span={8}><Button type="primary">Query</Button>&nbsp;&nbsp;<Button type="primary">Delete</Button></Col>
        </Row>
        <Row>
          <Col span={8}><h3>Sensor Id:</h3></Col>
          <Col span={8}><Input placeholder="please input sensor id" /></Col>
          <Col span={8}><Button type="primary">Query</Button>&nbsp;&nbsp;<Button type="primary">Delete</Button></Col>
        </Row>
        <Row>
          <Col span={8}><h3>Auxiliary information Id:</h3></Col>
          <Col span={8}><Input placeholder="please input auxiliary information id" /></Col>
          <Col span={8}><Button type="primary">Query</Button>&nbsp;&nbsp;<Button type="primary">Delete</Button></Col>
        </Row>
        <br />
        <hr />
        <br />
        <h3>Query Result</h3>
        <Input.TextArea autosize={{ minRows: 12, maxRows: 15 }} />
      </div>
    );
  }
}
