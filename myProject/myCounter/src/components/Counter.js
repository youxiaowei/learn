import React, {Component} from 'react'
class Counter extends Component {
    constructor(props){
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.state={value:0};
    }
    onIncrement() {
        let value=this.state.value+1;
        this.setState({value:value});
    }
    onDecrement() {
      let value=this.state.value-1;
      this.setState({value:value});
    }
    incrementIfOdd() {
        if (this.state.value % 2 !== 0) {
          this.onIncrement()
        }
      }
    
      incrementAsync() {
        setTimeout(this.onIncrement, 1000)
      }
    render() {
        return(
            <p>
            Clicked: {this.state.value} times
            {' '}
            <button onClick={this.onIncrement}>
              +
            </button>
            {' '}
            <button onClick={this.onDecrement}>
              -
            </button>
            {' '}
            <button onClick={this.incrementIfOdd}>
              Increment if odd
            </button>
            {' '}
            <button onClick={this.incrementAsync}>
              Increment async
            </button>
          </p>
        );
        
    }
}
export default Counter
