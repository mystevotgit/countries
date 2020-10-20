import React from 'react';
import './App.css';
import Topbar from './components/Topbar';

function App() {
  return (
    <>
      <Topbar />
      <div className="appbody">
        <div className="main" >
          <div className="query-elements" >
            <form className="form" >
              <input type="text" placeholder="Search for a country" id="search" />
            </form>
          </div>
          <div className="grid">
            <div className="model" >
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
