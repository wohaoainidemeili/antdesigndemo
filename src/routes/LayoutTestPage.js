/* eslint-disable no-mixed-spaces-and-tabs */
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { connect } from 'dva';
import { Link } from 'dva/router';

const MenuItemGroup = Menu.ItemGroup;
import { QueryList } from '../components/QueryList';
import { MonitoringList } from '../components/MonitoringList';
import { InsertSchemeList } from '../components/InsertSchemeList';
import {InsertDataList} from '../components/InsertDataList';
import {InsertSensorList} from "../components/InsertSensorList";
import {DeleteList} from "../components/DeleteList";
import {UpdateSchemeList} from "../components/UpdateSchemeList";
import {UpdateDataList} from "../components/UpdateDataList";
import {UpdateSensorList} from "../components/UpdateSensorList";
import {InsertModelList} from "../components/InsertModelList";
import {InsertAuList} from "../components/InsertAuList";
import {UpdateAuList} from "../components/UpdateAuList";
import {UpdateModelList} from "../components/UpdateModelList";

class layoutpage extends React.Component {
  state = {
    current: 'mail',
  }
// eslint-disable-next-line no-tabs
  changeContent=(id) => {
	  switch (id) {
		  case 'mail':
			  return (<MonitoringList />);
		      break;
		  case 'query':
		      return (<QueryList />);
			  break;
    case 'insert:1':
      return (<InsertSchemeList />);
      break;
    case 'insert:2':
      return(<InsertModelList/>);
      break;
      case 'insert:3':
        return(<InsertDataList/>);
        break;
      case 'insert:4':
        return(<InsertSensorList/>);
        break;
      case 'insert:5':
        return(<InsertAuList/>);
          break;
      case 'update:1':
        return(<UpdateSchemeList/>);
        break;
      case 'update:2':
        return(<UpdateModelList/>);
        break;
      case 'update:3':
        return(<UpdateDataList/>);
        break;
      case 'update:4':
        return(<UpdateSensorList/>);
        break;
      case 'update 5':
        return(<UpdateModelList/>);
        break;
      case 'delete':
        return(<DeleteList/>);
        break;
    default:
      break;
	  }
  }
  changeLocation=(id) => {
    switch (id){
      case 'mail':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Monitoring management</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'query':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Query</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'insert:1':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Insert:Scheme</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'insert:2':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Insert:Model</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'insert:3':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Insert:Data</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'insert:4':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Insert:Sensor</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'insert:5':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Insert:Auxiliary information</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'update:1':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Update:Scheme</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'update:2':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Update:Model</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'update:3':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Update:Data</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'update:4':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Update:Sensor</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'update 5':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Update:Auxiliary information</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      case 'delete':
        return (
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Active model management</Breadcrumb.Item>
            <Breadcrumb.Item>Delete</Breadcrumb.Item>
          </Breadcrumb>
        );
        break;
      default:
        break;
    }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              onClick={this.handleClick}
              selectedKeys={this.state.current}
              mode="horizontal"
            >
              <SubMenu title={<span><Icon type="setting" />Active model management</span>}>
                <Menu.Item key="query">Query</Menu.Item>
                <MenuItemGroup title="Insert">
                  <Menu.Item key="insert:1">Scheme</Menu.Item>
                  <Menu.Item key="insert:2">Model</Menu.Item>
                  <Menu.Item key="insert:3">Data</Menu.Item>
                  <Menu.Item key="insert:4">Sensor</Menu.Item>
                  <Menu.Item key="insert:5">Auxiliary information</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Update">
                  <Menu.Item key="update:1">Scheme</Menu.Item>
                  <Menu.Item key="update:2">Model</Menu.Item>
                  <Menu.Item key="update:3">Data</Menu.Item>
                  <Menu.Item key="update:4">Sensor</Menu.Item>
                  <Menu.Item key="update:5">Auxiliary information</Menu.Item>
                </MenuItemGroup>
                <Menu.Item key="delete">Delete</Menu.Item>
              </SubMenu>
              <Menu.Item key="mail">
                <Icon type="appstore" />Monitoring management
        </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout style={{ padding: '0 12px 12px' }}>
              {this.changeLocation(this.state.current)}
              {/** <Link to='/'>点击改变</Link>**/}
              <Content style={{ background: '#fff', padding: 0, margin: 0, minHeight: 480 }}>
                {this.changeContent(this.state.current)}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>);
	 }
}

export default connect()(layoutpage);

