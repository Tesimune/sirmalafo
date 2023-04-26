import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import FooterComp from './components/FooterComp'

function App() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <body className='min-h-screen'>
        <Landing />
      </body>
      <footer>
        <FooterComp />
      </footer>
    </div>
  );
}

export default App;
