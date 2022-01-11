import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Calculator />
      </div>
    );
  }
}

export default App;
