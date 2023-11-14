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
import Project from './pages/Project';
import RboardListPage from './pages/board/RboardListPage';
import AddRboardPage from './pages/board/AddRboardPage';
import RboardPage from './pages/board/RboardPage';
import Skills from './pages/Skills';
import FileDbListPage from './pages/updateFileDb/FileDbListPage';
import AddFileDbPage from './pages/updateFileDb/AddFileDbPage';
import FileDbPage from './pages/updateFileDb/FileDbPage';


function App() {
  return (
    <div className="App">
      <NavCom/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
        {/* Rboard */}
        <Route path="/rboard" element={<RboardListPage/>}/>
        <Route path="/add-rboard" element={<AddRboardPage/>}/>
        <Route path="/rboard/bno/:bno/rbRef/:rbRef" element={<RboardPage/>}/>
        {/* FileDb */}
        <Route path="/fileDb" element={<FileDbListPage/>}/>
        <Route path="/add-fileDb" element={<AddFileDbPage/>}/>
        <Route path="/fileDb/:uuid" element={<FileDbPage/>}/>
      </Routes>
      <FooterCom/>
    </div>
  );
}

export default App;
