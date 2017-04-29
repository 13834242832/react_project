import React,{Component} from 'react';
import PCHeader from './pcHeader';
import PCFooter from './pcFooter';
import PCNewsContainer from './pcContainer';
export default class PCIndex extends Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}