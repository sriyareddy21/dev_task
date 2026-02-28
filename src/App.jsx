import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/dev_task">
      <div className="app-wrapper">
        <div className="mobile-container">

          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/create-account" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>

          <BottomNav />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;