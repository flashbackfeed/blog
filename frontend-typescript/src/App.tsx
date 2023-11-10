import React from 'react';
// custom
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";



// 리액트 
import { Route, Routes } from 'react-router-dom';
import NavCom from './components/common/NavCom';
import FooterCom from './components/common/FooterCom';
import Home from './pages/Home';
import NotFound from './components/common/NotFound';
import Contact from './pages/Contact';
import Feature from './pages/Feature';
import Project from './pages/Project';
import Quote from './pages/Quote';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import RboardListPage from './pages/board/RboardListPage';
import AddRboardPage from './pages/board/AddRboardPage';
import RboardPage from './pages/board/RboardPage';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <NavCom/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/quote" element={<Quote/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        {/* Rboard */}
        <Route path="/rboard" element={<RboardListPage/>}/>
        <Route path="/add-rboard" element={<AddRboardPage/>}/>
        <Route path="/rboard/bno/:bno/rbRef/:rbRef" element={<RboardPage/>}/>
        
      </Routes>
      <FooterCom/>
    </div>
  );
}

export default App;
