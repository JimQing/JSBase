/*
* @Author: JimQing
* @Date:   2018-05-09 20:46:57
* @Last Modified by:   JimQing
* @Last Modified time: 2018-05-09 20:47:03
*/
import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter的改变需要后端支持，HashRouter则不用
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './index.scss';
class A extends React.Component{
    constructor(props){
        super(props);
    }    
    render(){
        // 取参方式{this.props.match.params.id} | path={`${this.props.match.path}/:id`}带参数的一般放最后
        // Switch只选择第一个满足条件的代码执行
        return (
            <div>
                Component A
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(route) => {
                        return <div>当前组件是:不带参数的A</div>
                    }}/>
                    <Route path={`${this.props.match.path}/sub`} render={(route) => {
                        return <div>当前组件是:Sub</div>
                    }}/>
                    <Route path={`${this.props.match.path}/:id`} render={(route) => {
                        return <div>当前组件是:带参数的A,参数是：{route.match.params.id}</div>
                    }}/>
                </Switch>
            </div>
        )
    }       
}
class B extends React.Component{
    constructor(props){
        super(props);
    }    
    render(){
        return <div>Component B</div>
    }       
}
class Wrapper extends React.Component{
    constructor(props){
        super(props);
    }    
    render(){
        return <div>
        <Link to="/a"> 组件A </Link>
        <br/>
        <Link to="/a/123"> 带参数的组件A </Link>
        <br/>
        <Link to="/a/sub"> /a/sub </Link>
        <br/>
        <Link to="/b"> 组件B </Link>
            {this.props.children}
        </div>
    }       
}
ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
        </Wrapper>
    </Router>
   ,
    document.getElementById('app')
);