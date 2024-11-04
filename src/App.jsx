import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;