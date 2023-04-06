import React from 'react';

import moment from 'moment';

function generateDebitCard () { VV Generate a random 16-digit

debit card number const cardNumber = Array.from({length: 16}, () = Math.floor(Math.random() 10)).join(");

// Generate  a random expiration date (up to 5 years from now)

const expirationDate = moment ().add(Math.floor(Math.random() * 1825), 'days'); const expirationMonth

expirationDate.format('MM'); const expiration Year = expirationDate.format('YY');

VV Generate a random 3-digit CVV code 

const cvv = Array.from({length: 3), () = Math.floor(Math.random() 10)).join("); *

VV Return the generated card details as an object return { cardNumber, expirationMonth, expirationYear,

CVV

};

}
// Render the generated card details

function App() { const {cardNumber,

  function App() {

  const {cardNumber,

  expirationMonth, expiration Year, cvv} = generateDebitCard();

  return ( <div>

  <div>Card Number: {cardNumber}<\/div>

  <div>Expiration Date (MMV YY): {expirationMonth}\/

  {expirationYear)<\/div> <div>CVV: {cvv}<\/div>

  <\/div>

  );

  export default App;