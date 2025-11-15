import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Portfolio from './components/Portfolio';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhatIDo />
      <Portfolio />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;