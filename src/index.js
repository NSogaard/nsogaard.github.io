import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EducationCertification from './edu-cert/EducationCertification.tsx';
import About from './about/About.tsx';
import './styling/parentStyle.css';
import WorkExperience from './work-experience/WorkExperience.tsx';
import Portfolio from './portfolio/Portfolio.tsx';
import SWEPortfolio from './portfolio/swe-portfolio/SWEPortfolio.tsx';
import DAPortfolio from './portfolio/da-portfolio/DAPortfolio.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootWrapper = () => {
  const [isLandscape, setIsLandscape] = useState(window.outerWidth > window.outerHeight);
  const [selectedPage, setSelectedPage] = useState('about');

  const isLandscapeListener = () => {
    console.log( (window.outerWidth > window.outerHeight) ? 'landscape' : 'portrait')
    setIsLandscape(window.outerWidth > window.outerHeight)
  }

  window.addEventListener('resize', isLandscapeListener)

  return(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <About isLandscape={isLandscape}/> } />
          <Route path='/edu&cert' element={<EducationCertification isLandscape={isLandscape} />} />
          <Route path='/workexp' element={<WorkExperience isLandscape={isLandscape} />} />
          <Route path='/portfolio' element={<Portfolio isLandscape={isLandscape} />} />
          <Route path='/portfolio/SWEPortfolio' element={<SWEPortfolio isLandscape={isLandscape} />} />
          <Route path='/portfolio/DAPortfolio' element={<DAPortfolio isLandscape={isLandscape} />} />
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
