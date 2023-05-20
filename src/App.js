import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Docs from './components/Docs';
import EditDocs from './components/EditDocs';
import "./App.css"
function App() {
    return (
        <Router>
            <div className="app-container">
                {/* <Sidebar /> */}
                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<Docs />} />
                        <Route path="/editDocs/:id" element={<EditDocs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
