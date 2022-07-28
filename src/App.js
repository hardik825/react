import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About ";

function App() {
  const[mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#022641fa';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About TextUtils"
      />
      {/* <Navbar title="TextUtils" /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
