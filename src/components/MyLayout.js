import React from 'react';
import { TabBar } from 'antd-mobile';
import "../styles/iconfont.css"

class MyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden:false,
      fullScreen:false
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
            });
          }}
        >

        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
            });
          }}
        >

        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={ <span className='iconfont icon-home'/> }
            selectedIcon={ <span className='iconfont icon-home'/> }
            selected={this.props.match.url==='/'}
            onPress={() => {this.props.history.push('/')}}
            data-seed="logId"
          >
            {this.props.match.url==='/'?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className='iconfont icon-gouwuche'/> }
            selectedIcon={ <span className='iconfont icon-gouwuche'/> }
            title="购物车"
            key="Cart"
            badge={1}
            selected={this.props.match.url==='/Cart'}
            onPress={() => {this.props.history.push('/Cart')}}
            data-seed="logId1"
          >
            {this.props.match.url==='/Cart'?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className='iconfont icon-weibiaoti2fuzhi12'/> }
            selectedIcon={ <span className='iconfont icon-weibiaoti2fuzhi12'/> }
            title="我的"
            key="Mine"
            selected={this.props.match.url==='/Mine'}
            onPress={() => {this.props.history.push('/Mine')}}
          >
            {this.props.match.url==='/Mine'?this.props.children:null}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}


export default MyLayout;
