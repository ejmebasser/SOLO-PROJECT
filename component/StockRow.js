import React, { Component } from 'react';

console.log('start line 3');

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  //'${console.log(line 12)}'
  componentDidMount() {
    //const url = `https://cloud.iexapis.com/stable/stock/aapl/intraday-prices?chartLast=1&token=pk_c6f31cdc66cc485cbe1656f04dffc43f`;
    console.log('LOOK HERE');
    fetch(
      `https://cloud.iexapis.com/stable/stock/aapl/intraday-prices?&token=pk_c6f31cdc66cc485cbe1656f04dffc43f`
    )
      .then((response) => response.json())
      .then((data) => console.log(data[10]));
  }
  //console.log("look here stupid")
  render() {
    return (
      <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.close}</td>
        <td>{this.state.data.date}</td>
        <td>{this.state.data.label}</td>
      </tr>
    );
  }
}
console.log('line 34');
export default StockRow;
