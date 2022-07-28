import "./App.css";
import TextForm from "./components/TextForm";

import Navbar from "./components/Navbar";
import About from "./components/About ";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar title="TextUtils" /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
        <About />
      </div>
    </>
  );
}

export default App;
