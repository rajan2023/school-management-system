import { Route, Routes } from "react-router-dom";
import LoginComponent from "./pages/auth/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </div>
  );
}

export default App;
