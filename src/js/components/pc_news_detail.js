import React, {Component} from 'react';
import {Row, Col,BackTop} from 'antd';
import PCHeader from './pcHeader';
import PCFooter from './pcFooter';
import PCNewsImageBlock from './pc_news_images_block';
import PCComments from './common_comments';
export default class PCNewsDetails extends Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }

    componentDidMount() {
        var myFetchOptions = {
            method: "GET"
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };
    render() {

        return (
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className='container'>
                        <div class="article-content" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <PCComments uniquekey={this.props.params.uniquekey}></PCComments>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" cardTitle="相关新闻" imageWidth="111px"></PCNewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
                <BackTop/>
            </div>
        );
    }
}