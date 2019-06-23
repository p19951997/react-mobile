import React, { Component, Fragment } from 'react'
import { Carousel } from 'antd-mobile';

import { getGoods } from '../api/index.js'

class Home extends Component {
    state = {
        data: ['1', '2', '3','4','5'],
        imgHeight: 176,
        url:[]
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [ this.state.url[0], this.state.url[1], this.state.url[2],this.state.url[3],this.state.url[4]],
            });
        }, 100);
        getGoods().then(res => {
            // console.log(res);
            // console.log(res.data.message.sliderlist);
            this.state.url=res.data.message.sliderlist
            // this.state.url.forEach(v=>{
            //     this.state.img_url=v.img_url
            //     console.log(img_url);
            // })
        })
    }
    render() {
        return (
            <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {this.state.url.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
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
        );
    }
}

export default Home;