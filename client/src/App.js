import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import OptionPage from "./OptionPage/OptionPage";
import StorePage from "./StorePage/StorePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<FirstPage />}></Route>
      <Route path="/option-page" element={<OptionPage />}></Route>
      <Route path="/store-page" element={<StorePage />}></Route>
    </Routes>
  );
}

export default App;
