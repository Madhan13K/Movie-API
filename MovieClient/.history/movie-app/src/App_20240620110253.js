import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from;
function App() {

  const  [movies,setMovies]=useState();
  const getMovies = async() =>{
    try {
        const response =await api.get('/api/v1/movies');
    setMovies(response.data);
    console.log(response.data);
    }
    catch(err) {
        console.log(err);
    }
  
  useEffect(()=>{
    getMovies();
  },[]);
  }
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;