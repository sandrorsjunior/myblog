import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import {Header} from "./components/Header";
import {About} from "../src/components/pages/About";
import {Home} from "../src/components/pages/Home";
import {Footer} from "./components/Footer";
import {Content} from "./components/content";

function App() {

  return (
    <div className='container bg-white'>
      <Header/>
      <Content>
        <Home/>
      </Content>
      <Footer/>
    </div>
  )
}

export default App
