// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandNumber = () => Math.ceil(Math.random() * 100)

  checkOddOrEven = () => {
    const randNumber = this.getRandNumber()
    this.setState(prevState => ({count: prevState.count + randNumber}))
  }

  render() {
    const {count} = this.state
    const getText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-app-container">
        <div className="even-odd-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-para">Count is {getText}</p>
          <button type="button" onClick={this.checkOddOrEven}>
            Increment
          </button>
          <p className="hint">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
