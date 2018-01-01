import React, {Component} from 'react';

class TotalDonations extends Component {
  render() {
    return (
      <div className="total-donation-container">
        <div
          className=
          {(this.props.data.dedicate !== undefined && this.props.data.dedicate === true)? "dedication" : "hide"}>
          To: {(this.props.data.dedicateeName && this.props.data.dedicateeName)
            ? this.props.data.dedicateeName
            : 'First Last'}
          <br/>
          From: {(this.props.data.firstName && this.props.data.lastName)
            ? this.props.data.firstName + ' ' + this.props.data.lastName
            : 'First Last'}
        </div>
        <div
          className={(this.props.data.dedicate !== undefined && this.props.data.dedicate === true)
          ? "move total-donation"
          : "total-donation"}>
          ${this.props.data.amount
            ? Math.round(this.props.data.amount * 100) / 100
            : '0'}
        </div>
      </div>
    );
  }
}

export default TotalDonations;
