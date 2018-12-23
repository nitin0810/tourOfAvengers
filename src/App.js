import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { MainContent } from './components/MainContent/MainContent';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      avengers: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <main className="container">
          <MainContent />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
