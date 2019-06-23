import React, { Component, Fragment } from 'react'
import { Carousel } from 'antd-mobile';

import { getGoods } from '../api'

class Home extends Component {
    state = {
        imgHeight: 176,
        // 轮播图
        sliderlist: []
    }
    componentDidMount() {
        getGoods().then(res => {
            console.log(res);
            if (res.status === 0) {
                // 成功
                this.setState({
                    sliderlist: res.message.sliderlist,
                    // toplist:res.message.toplist
                })
            }
        })
    }
    render() {
        return (
            <Fragment>
                {/* 轮播图开始 */}
                <Carousel
                    // 是否自动轮播
                    autoplay
                    // 是否无限循环
                    infinite
                >
                    {this.state.sliderlist.map(val => (
                        <a
                            key={val.id}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val.img_url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 轮播图 结束 */}
            </Fragment>
        );
    }
}

export default Home;