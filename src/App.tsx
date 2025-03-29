import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Ecosystem from './pages/Ecosystem';
import Community from './pages/Community';
import Business from './pages/Business';
import Developers from './pages/Developers';
import Security from './pages/Security';
import FAQ from './pages/FAQ';
import Glossary from './pages/Glossary';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/community" element={<Community />} />
            <Route path="/business" element={<Business />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/security" element={<Security />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
