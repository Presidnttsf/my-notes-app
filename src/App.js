import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Notes from './screen/Notes';
import Create from './screen/Create';
import Home from './screen/Home';
import { Container } from 'react-bootstrap';



function App() {

  const [notes, setNotes] = useState([]);




  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notes" element={<Notes setNotes={setNotes} notes={notes} />} />
        <Route path="/create" element={<Create setNotes={setNotes} />} />
      </Routes>


    </Container>
  );
}

export default App;
