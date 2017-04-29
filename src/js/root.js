import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import PCIndex from './components/pcIndex'
import MIndex from './components/mIndex'
import PCNewsDetails from './components/pc_news_detail';
import MNewsDetails from './components/mDetail';
import {Router,Route,hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';
export default class Root extends Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">　
                    <Router history={hashHistory}>
                        <Route path="/" component={MIndex}></Route>
                        <Route path="/details/:uniquekey" component={MNewsDetails}></Route>
                    </Router>
                </MediaQuery>

            </div>
        );
    }
}
ReactDOM.render(<Root/>,document.getElementById("mainContainer"));