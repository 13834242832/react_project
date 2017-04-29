import React,{Component} from 'react';
import {Row,Col,Menu,Icon,Tabs,message,Form,Input,Button,Checkbox,Card,nitification,} from "antd";
const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const TabPane=Tabs.TabPane;
const MenuItemGroup=Menu.ItemGroup;
import {Router,Route,Link,browserHistory} from 'react-router';
export default class PCUserCenter extends Component{
    constructor(){
        super();
        this.state={
            comments:''
        };
    }
    render(){
        return(
            <div>
            <Tabs>
                <TabPane tab="我的收藏列表" key="1" >

                </TabPane>
                <TabPane tab="我的评论列表" key="2" >

                </TabPane>
                <TabPane tab="头像设置" key="3" >

                </TabPane>
            </Tabs>
            </div>
        )
    }
}
