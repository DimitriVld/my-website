import React, { useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import './asset/style/style.scss'
import DefaultLayout from './views/layout/DefaultLayout';
import HomePage from "./views/page/Home";
import ServicesPage from "./views/page/Services";
import ProjectsPage from "./views/page/Projects";
import ProjectPage from "./views/page/Project";
import AboutPage from "./views/page/About";
import ContactPage from "./views/page/Contact";

const App = () => {
  const [context, setContext] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/projects?populate=*')
      .then((response) => setContext(response.data.data))
      .catch((error) => console.log("erreur"))
      .finally(() => console.log('okokok'));
  }, []);

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DefaultLayout page={<HomePage />} />} />
          <Route exact path="/services" element={<DefaultLayout page={<ServicesPage />} />} />
          <Route exact path="/projects" element={<DefaultLayout page={<ProjectsPage />} />} />
          <Route exact path="/about" element={<DefaultLayout page={<AboutPage />} />} />
          <Route exact path="/contact" element={<DefaultLayout page={<ContactPage />} />} />
          <Route exact path="/project/:projectId" element={<DefaultLayout page={<ProjectPage />} />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;