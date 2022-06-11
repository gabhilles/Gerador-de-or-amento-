import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Home from './pages/Home/';
import BudgetForm from './pages/BudgetForm/';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />}></Route>

                <Route path="/budget" element={<BudgetForm />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
