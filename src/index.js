import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EducationCertification from './uiElements/edu-cert/EducationCertification.tsx';
import About from './uiElements/about/About.tsx';
import './styling/parentStyle.css'
import WorkExperience from './uiElements/work-experience/WorkExperience.tsx';
import Portfolio from './uiElements/portfolio/Portfolio.tsx';
import SWEPortfolio from './uiElements/portfolio/swe-portfolio/SWEPortfolio.tsx';
import DAPortfolio from './uiElements/portfolio/da-portfolio/DAPortfolio.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootWrapper = () => {
  const [isLandscape, setIsLandscape] = useState(window.outerWidth > window.outerHeight);
  const [selectedPage, setSelectedPage] = useState('About');

  const isLandscapeListener = () => {
    console.log( (window.outerWidth > window.outerHeight) ? 'landscape' : 'portrait')
    setIsLandscape(window.outerWidth > window.outerHeight)
  }

  window.addEventListener('resize', isLandscapeListener)

  return(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <About isLandscape={isLandscape} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path='/edu&cert' element={<EducationCertification isLandscape={isLandscape} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path='/workexp' element={<WorkExperience isLandscape={isLandscape} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path='/portfolio' element={<Portfolio isLandscape={isLandscape} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path='/portfolio/SWEPortfolio' element={<SWEPortfolio isLandscape={isLandscape} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path='/portfolio/DAPortfolio' element={<DAPortfolio isLandscape={isLandscape} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )  
};


root.render(<RootWrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
