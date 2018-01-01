import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DonationPage from './DonationPage.js';
import TotalDonations from './TotalDonations.js';
import {formValueSelector} from 'redux-form';
import {connect} from 'react-redux'
import PersonalPage from './PersonalPage.js';
import CardPage from './CardPage.js';

class GivingForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this
      .nextPage
      .bind(this);
    this.previousPage = this
      .previousPage
      .bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }
  previousPage() {
    this.setState({
      page: this.state.page - 1
    });
  }

  render() {
    const {onSubmit} = this.props;
    const {page} = this.state;
    return (
      <div>
        <TotalDonations data={this.props}/>
        <div>
          {page === 1 && <DonationPage onSubmit={this.nextPage}/>}
          {page === 2 && <PersonalPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
          {page === 3 && <CardPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
        </div>
      </div>
    );
  }
}

GivingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

// grab some values from the store
const selector = formValueSelector('wizard');
GivingForm = connect(state => {
  const amount = selector(state, 'paymentAmount');
  const firstName = selector(state, 'firstName');
  const lastName = selector(state, 'lastName');
  const dedicate = selector(state, 'dedicate');
  const dedicateeName = selector(state, 'dedicateeName');

  return {amount, firstName, lastName, dedicate, dedicateeName}
})(GivingForm)
export default GivingForm;
