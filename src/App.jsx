import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import BrowserRouter (as Router)
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Footer } from "./components/Footer";
import { Content } from "./components/content";
import { Projects } from "./pages/Projects";
import { Article } from "./pages/Article";
import { dataContentOfArticleExemple } from "./pages/Article/dataExemple";
import { TextEditor } from "./components/TextEditor";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter (Router) */}
      <div className="container bg-white">
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />  {/* Use 'element' instead of 'component' */}
            <Route path="/about" element={<About />} />  {/* Use 'element' */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Article" element={<Article dangerouslySetInnerHTML={{ __html: dataContentOfArticleExemple }}/>} /> 
            <Route path="/make-post" element={<CreatePost/>} />
          </Routes>
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
