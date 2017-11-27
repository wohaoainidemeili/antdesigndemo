import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Row, Col, Input,Button} from 'antd';
import {QueryList} from '../components/QueryList';
class NextPage extends  React.Component{
	render(){return(
	<QueryList/>
	);}
}

export default connect()(NextPage);
