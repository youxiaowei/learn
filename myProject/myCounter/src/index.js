import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
// mapStateToProps:
// 建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系
// 此处value代表为UI组件的同名参数
// mapStateToProps会订阅 Store，
// 每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
// mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
// 使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
// mapDispatchToProps是connect函数的第二个参数，
// 用来建立 UI 组件的参数到store.dispatch方法的映射。
// 也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。
// 它可以是一个函数，也可以是一个对象。
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
// 用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
// 此处Counter为UI组件
// （1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
// （2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
// connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，
// 就是说 Store 的更新不会引起 UI 组件的更新。
const App = connect(
  mapStateToProps,//UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props）
  mapDispatchToProps// 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
)(Counter)

ReactDOM.render(
    //connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
    // React-Redux 提供Provider组件，可以让容器组件拿到state
    // Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)