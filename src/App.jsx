import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import {Header} from "./components/Header";
import {About} from "./components/About";
import {Footer} from "./components/Footer";
import {Content} from "./components/content";

function App() {

  return (
    <div className='container'>
      <Header/>
      <Content>
        <About></About>
      </Content>
      <Footer></Footer>
    </div>
  )
}

export default App
