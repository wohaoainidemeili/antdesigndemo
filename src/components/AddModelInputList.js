import React from 'react';
import { Form, Input, Icon, Button,Row,Col } from 'antd';
const FormItem = Form.Item;
let uuid = 0;
class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          required={false}
          key={k}
        >
          <Row>
            <Col span={5}><h3>Input parameter name:</h3></Col>
            <Col span={6}>
              {getFieldDecorator(`values-${k}`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "Please input model name.",
                }],
              })(
                <Input/>
              )}
            </Col>
            <Col span={5}><h3>Input parameter type:</h3></Col>
            <Col span={6}>
          {getFieldDecorator(`names-${k}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input model name.",
            }],
          })(
                <Input/>
          )}
            </Col>
            <Col span={2}>
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
            </Col>

          </Row>
        </FormItem>
      );
    });
    return (
      <Form>
        <br/>
        <hr/>
        <FormItem>
          <Row>
            <Col span={6}><h3>Input Parameters setting:</h3></Col>
            <Col span={4}><Button type="dashed" onClick={this.add} >
              <Icon type="plus" /> Add Input Parameters:
            </Button></Col>
          </Row>
        </FormItem>
        {formItems}
        <hr/>
        <br/>
      </Form>
    );
  }
}
export const AddModelInputList = Form.create()(DynamicFieldSet);

