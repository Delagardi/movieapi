import React, { Component } from 'react';
// import Header from '../header';
import Main from '../main';
// import Pagination from '../pagination';
// import Footer from '../footer';
import Filters from '../filters';

import './app.css';


class App extends Component {
  render() {
    // <Header/>
    // <Pagination/>
    // <Footer/>
    return (
      <div className="app">
        <header>
          <div className="header-logo">
            <a href="/main">
              <img src="/images/movierating_logo.png" alt="movierating" />
            </a>
          </div>
          <Filters/>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <span className="copyright">&#169; Yuriy Shabanov 2019</span>
        </footer>
      </div>
    );
  }
}

export default App;
