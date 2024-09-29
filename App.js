import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Dashboard from "./Dashboard";
import Registration from "./Registration";
// ... import other pages

function App() {
  return (
    <Router>
      <div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Registration" element={<Registration />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;