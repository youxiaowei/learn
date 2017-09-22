// step3 Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
// store.dispatch方法会触发 Reducer 的自动执行
export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }