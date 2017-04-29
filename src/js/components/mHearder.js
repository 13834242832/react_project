import React, {Component} from 'react';
import {
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    Modal,
    Checkbox
} from 'antd';
import {Link} from 'react-router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
class MHeader extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         current:'top',
    //     }
    // }
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisiable: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }
    setModalVisible(value){
        this.setState({
            modalVisiable:value
        })
    };
    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions={
            method:'GET'
        };
        var formData=this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
        then(response=>response.json()).then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.UserId});

        });
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    handleClick(e){
        if(e.key=='register'){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }
        else{
            this.setState({current:e.key})
        }
    };
    login(){
        this.setModalVisible(true);
        console.log(123)
    }
    render() {
        let {getFieldDecorator} = this.props.form;
        const userShow=this.state.hasLogined?
            <Link>
                <Icon type="inbox"/>
            </Link>:
            <Icon type="setting" onClick={this.login.bind(this)}/>;
        return (
            <div id="mobileheader">
                <header>
                    <Link to="/">
                        <img src="./images/logo.png" alt="log"/>
                        <span>ReactNews</span>
                    </Link>
                    {userShow}
                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisiable}
                           onCancel={() => this.setModalVisible(false)}
                           onOk={() => this.setModalVisible(false) } okText='关闭'
                    >
                        <Tabs type="card">
                            <TabPane tab="注册" key="2">
                                <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                    <FormItem label="账户">
                                        <Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
                                    </FormItem>
                                    <FormItem label="密码">
                                        <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
                                    </FormItem>
                                    <FormItem label="确认密码">
                                        <Input type="password" placeholder="请确认您的密码" {...getFieldDecorator('r_confirmPassword')}/>
                                    </FormItem>
                                    <Button type="primary" htmlType="submit">注册</Button>
                                </Form>
                            </TabPane>

                        </Tabs>
                    </Modal>
                </header>
            </div>
        )
    }
}
export default MHeader = Form.create({})(MHeader)