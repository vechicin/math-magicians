import React from 'react';
import Navbar from './Navbar';
import './Quote.css';

const Quote = () => (
  <div>
    <Navbar />
    <h1 className="quote-title">Math Magicians</h1>
    <div className="quote">
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding. -William Paul Thurston
    </div>
  </div>
);

export default Quote;
