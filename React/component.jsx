/*
* @Author: Administrator
* @Date:   2018-05-08 19:15:20
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-08 19:15:22
*/
import React from 'react';
import ReactDOM from 'react-dom';
// 基础组件
function Component(){
    return <h1>JimQing</h1>
}
class ES6Component extends React.Component{
    render(){
    return <h1>Im JimQing in es6</h1>
}
}
ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>,
    
    document.getElementById('app')
);

// state 和 props 用法
class Component extends React.Component{
    constructor(props){
        super(props);
    }   
    render(){
        setTimeout(() => {
            this.setState({
                 name : 'JimQing test'
                })
        },2000)
        return <h1>I am {this.state.name}</h1>
    }
}

ReactDOM.render(
    <div>
        <Component name="JimQing 123"/>
    </div>,
    
    document.getElementById('app')
);

// 事件处理方式
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : 'JimQing',
            age : 21
        };
        // 将handleClick里的this修正到Component里边为了使this.state.age成功取到
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            age : this.state.age + 1
        });
    }
    render(){
        return (
        <div>
            <h1>I am {this.state.name}</h1>
            <p>I am {this.state.age} years old.</p>
            <button onClick={this.handleClick}>+一岁</button>
        {/* 或者这种方法，可以不要在构造函数里取回this <button onClick={(e)=>{this.handleClick(e)}}>+一岁</button>*/}
            
        </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Component/>
    </div>,
    document.getElementById('app')
);
// 事件处理方式2
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name : 'JimQing',
            age : 21
        };
    }
    handleClick(){
        this.setState({
            age : this.state.age + 1
        });
    }
    onValueChange(e){
        this.setState({
            age : e.target.value
        });
    }
    render(){
        return (
        <div>
            <h1>I am {this.state.name}</h1>
            <p>I am {this.state.age} years old.</p>
            <button onClick={(e)=>{this.handleClick(e)}}>+一岁</button>
            <input type="text"onChange={(e)=> {this.onValueChange(e)}}/>
        </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Component/>
    </div>,
    document.getElementById('app')
);


// 组件的两种组合方式
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name : 'JimQing',
            age : 21
        };
    }
    handleClick(){
        this.setState({
            age : this.state.age + 1
        });
    }
    onValueChange(e){
        this.setState({
            age : e.target.value
        });
    }
    render(){
        return (
        <div>
            <h1>I am {this.state.name}</h1>
            <p>I am {this.state.age} years old.</p>
            <button onClick={(e)=>{this.handleClick(e)}}>+一岁</button>
            <input type="text"onChange={(e)=> {this.onValueChange(e)}}/>
        </div>
        );
    }
}
class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        return <h1>{this.props.children}</h1>
    }
}

class App extends React.Component{
    render(){
        return (
            <div className="">
        {/* 容器式组价 */}
                <Title>
                    <span>TTTTT</span>
                    <a href="">TTTTT</a>
                </Title>
                <hr/>
                {/* 单纯组价 */}
                    <Component/>
                
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

// 父类被子类所修改
class Child extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.changeColor('red');
    }
    render(){
        return (
        <div>
            <h1>父组件的背景色： {this.props.bgColor}</h1>
            <button onClick={(e)=>{this.handleClick(e)}}>Change this color</button>
        </div>
        );
    }
}
class Father extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor : '#999'
        }
    }
    onBgColorChange(color){
        this.setState({
            bgColor : color
        });
    }
    render(props){
        return (
        <div style={{background: this.state.bgColor}}>
            <Child bgColor={this.state.bgColor} changeColor = {(color) => this.onBgColorChange(color)}/>  
        </div>
        );
    }
}

ReactDOM.render(
    <Father/>,
    document.getElementById('app')
);

// 数据传递和状态提升，子类通过父类对另一个子类进行改变
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
ReactDOM.render(
    <Father/>,
    document.getElementById('app')
);

// {...this.props} 是用构造的方法 让本应该这样 current={this.props.current} 
// title={this.props.current} 这样的放法简写成 {...this.props}
<div className="col-md-12">
    <RcPagination
    current={this.props.current}
        {...this.props}
    }
    />
</div>