/*
* @Author: JimQing
* @Date:   2018-05-08 23:54:50
* @Last Modified by:   JimQing
* @Last Modified time: 2018-05-09 00:13:42
*/
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class Child1 extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.changeChild2Color('red');
    }
    render(){
        return (
        <div>
            <h1>Child1： {this.props.bgColor}</h1>
            <button onClick={(e)=>{this.handleClick(e)}}>Change this child2's color</button>
        </div>
        );
    }
}
class Child2 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div style={{background:this.props.bgColor}}>
            <h1>Child2背景颜色： {this.props.bgColor}</h1>
        </div>
        );
    }
}
class Father extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            child2BgColor : '#999'
        }
    }
    onChild2BgColorChange(color){
        this.setState({
            child2BgColor : color
        });
    }
    render(props){
        return (
        <div>
            <Child1 changeChild2Color={(color) => {this.onChild2BgColorChange(color)}}/>  
            <Child2 bgColor={this.state.child2BgColor}/>  
        </div>
        );
    }
}

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : 'Old State'
        }
        console.log('initial');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount'); 
    }
    // 将要接收父组件传来的props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    // 组件是否需要更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    // 组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    // 组件即将销毁
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    // 处理点击事件
    handleClick(){
        console.log('Update');
        this.setState({
            data : 'new state'
        });
    }
    render(){
        console.log('render');
        return (
            <div>
                <div>Props:{this.props.data}</div> 
                <button onClick={() => {this.handleClick()}}>更新组件</button>
            </div>
        );
    }
}
class App extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            data : 'Old State',
            hasChild : true
        }
        console.log('initial');
    }
    onPropsChange(){
        console.log('更新Props');
        this.setState({
            data : 'New Props'
        });
    }
    onDestoryChild(){
        console.log('干掉子组件:');
        this.setState({
            hasChild : false
        });
    }
    render(){
        return (
            <div>
                {this.state.hasChild ? (<Component data={this.state.data}/>) : null}
                
                <button onClick={() => {this.onPropsChange()}}>改变Props</button>
                <button onClick={() => {this.onDestoryChild()}}>干掉Props</button>
            </div>
        );
        
     }       
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);