import React from 'react';
import './styles/App.css';
import { TabBar } from 'antd-mobile';
import "./styles/iconfont.css"

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
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
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
            });
          }}
        >
          Click to switch fullscreen
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
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            1
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className='iconfont icon-gouwuche'/> }
            selectedIcon={ <span className='iconfont icon-gouwuche'/> }
            title="购物车"
            key="Cart"
            badge={1}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            2
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className='iconfont icon-weibiaoti2fuzhi12'/> }
            selectedIcon={ <span className='iconfont icon-weibiaoti2fuzhi12'/> }
            title="我的"
            key="Mine"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            3
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}


export default TabBarExample;
