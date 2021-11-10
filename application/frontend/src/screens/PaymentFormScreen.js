import store from '../redux/store';
import './PaymentFormScreen.css';
import 'react-credit-cards/es/styles-compiled.css';
import React from 'react';
import Cards from 'react-credit-cards';
import { useSelector } from 'react-redux';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  getCartSubTotal = () => {
    const { cartItems } = store.getState().cart;
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  getLoginState = () => {
    const { loggedIn } = store.getState().login;
    return loggedIn;
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        {!this.getLoginState() && this.props.history.push('/login')}
        <div id='PaymentForm' className='paymentformscreen'>
          <h3 className='paymentformscreen__heading'>Credit Card Info</h3>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form className='creditcard__form'>
            <input
              type='tel'
              name='number'
              placeholder='Card Number'
              value={this.state.number}
              maxLength={16}
              onInput={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onInput={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <input
              type='tel'
              name='expiry'
              placeholder='Valid Thru'
              value={this.state.expiry}
              maxLength={5}
              onInput={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <input
              type='tel'
              name='cvc'
              placeholder='CVC'
              value={this.state.cvc}
              maxLength={4}
              onInput={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <hr className='paymentformscreen__separator' />
            <h3 className='paymentformscreen__heading'>Address Info</h3>
            <input type='text' id='adr' name='address' placeholder='Address' />
            <input type='text' id='city' name='city' placeholder='City' />
            <input type='text' id='state' name='state' placeholder='State' />
            <input type='text' id='zip' name='zip' placeholder='Zip' />
            <hr className='paymentformscreen__separator' />
            <h3 className='paymentformscreen__heading'>
              Total: {this.getCartSubTotal()}
            </h3>
            <input
              className='paymentformscreen__button'
              type='button'
              value='Order'
            />
          </form>
        </div>
      </>
    );
  }
}
