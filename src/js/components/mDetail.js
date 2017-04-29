import React,{Component} from 'react';
import {Row, Col} from 'antd';
import MFooter from './mFooter';
import MHeader from './mHearder';
import MComments from './common_comments';
export default class mNewsDetails extends Component {
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
            <div id="mobileDetailsContainer">
                <MHeader/>
                <div class="ucmobileList">
                <Row>
                    <Col span={24} className='container'>
                        <div class="article-content" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                        <MComments uniquekey={this.props.params.uniquekey}/>
                    </Col>
                </Row>
                </div>
                <MFooter/>
            </div>
        );
    }
}