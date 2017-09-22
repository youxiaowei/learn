import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import {createStore} from 'redux'
import counterR from './reducers/index'
// step1、生成store，整个应用只有的一个store，包含所有数据
// createStore函数接受另个函数作为参数，返回新的store
// store.dispatch方法会触发 Reducer 的自动执行。
// 为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，
// 将 Reducer 传入createStore方法。
const store = createStore(counterR);
// store.getState()获取当时的State
// 一个State对应一个View
// Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。
// step2 store.dispatch()是 View 发出 Action 的唯一方法。
class Counter extends Component{
    constructor(props) {
        super(props);
        // 如果通过this.state传值得话，得重新setState()，否则之一直不变
    }
    render(){
        return(
            <div>
            <Counter1 value={store.getState()} 
            onIncrement={()=>store.dispatch({type:'INCREMENT'})}
            onDecrement={()=>store.dispatch({type:'DECREMENT'})}
            />
            <Counter2
            onIncrement={()=>store.dispatch({type:'INCREMENT'})}
            onDecrement={()=>store.dispatch({type:'DECREMENT'})}
            />
            <Counter3 />
            </div>
        );
    }   
}
const render =() => ReactDOM.render(
<Counter />,document.getElementById('root'));
render()
// step4 Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
store.subscribe(render)