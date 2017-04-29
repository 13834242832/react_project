import React, {Component} from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_images_block';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div>
                                        <img src="images/carousel_1.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img src="images/carousel_2.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img src="images/carousel_3.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img src="images/carousel_4.jpg" alt=""/>
                                    </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type='guoji' cardTitle="国际头条" imageWidth="112px" />
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count="22" type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count="22" type="guoji" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国内" key="3">
                                <PCNewsBlock count="22" type="guonei" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="社会" key="4">
                                <PCNewsBlock count="22" type="shehui" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="娱乐" key="5">
                                <PCNewsBlock count="22" type="yule" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock width='100%' count={9} type='yule' cardTitle="娱乐新闻" imageWidth="132px" />
                            <PCNewsImageBlock width='100%' count={18} type='shehui' cardTitle="社会新闻" imageWidth="132px" />
                            <PCNewsImageBlock width='100%' count={18} type='guonei' cardTitle="国内新闻" imageWidth="132px" />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
