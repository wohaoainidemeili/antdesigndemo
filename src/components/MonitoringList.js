import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { SimpleAreaChart } from './ChartsList';


export class MonitoringList extends React.Component {
  render() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <div style={{width:'1400px',height:'800px'}}>
          <SimpleAreaChart/>
        </div>
        <Row><h1>Monitoring Operations</h1></Row>
        <br />
        <Row>
          <Col span={4}><h3>Scheme Id:</h3> </Col>
          <Col span={6}><Input placeholder="please input scheme id" /></Col>
          <Col span={1} />
          <Col span={6}><Button type="primary">Query</Button>&nbsp;&nbsp;<Button type="primary">Run</Button></Col>
        </Row>
        <br />
        <hr />
        <Row><h3>Scheme description:</h3></Row>
        <Row>
          <Col span={20}>
            <div style={{ marginBottom: 16 }}>
              <Input.TextArea autosize={{ minRows: 5, maxRows: 15 }} />
            </div>
          </Col>
        </Row>
        <Row><h3>Current situation:</h3></Row>
        <Row>
          <Col span={20}>
            <div style={{ marginBottom: 16 }}>
              <Input.TextArea autosize={{ minRows: 5, maxRows: 15 }} />
            </div>
          </Col>
        </Row>
        <h3>Running Record: </h3>
        <Row>
          <Col span={20}>
            <Input.TextArea autosize={{ minRows: 12, maxRows: 15 }} />
          </Col>
        </Row>
      </div>
    );
  }
}
