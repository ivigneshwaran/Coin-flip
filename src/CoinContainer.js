import React, { Component } from 'react'
import {choice} from "./Helpers"
import Coin from "./Coin";
import "./CoinContainer.css"

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
  }
  flipCoin() {
    const newCoin = choice(this.props.coins)
    // console.log(newCoin);
    this.setState(st => {
        return {
          currCoin: newCoin,
          nFlips: st.nFlips + 1,
          nHeads: st.nHeads + (newCoin.side === "heads"? 1 : 0),
          nTails: st.nTails + (newCoin.side === "tails"? 1 : 0),
        }
      })
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip a Coin</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick.bind(this)}>Flip me</button>
        <p>Out of {this.state.nFlips}, there have been {this.state.nHeads} heads and {this.state.nTails} tails </p>
      </div>
    )
  }
}
