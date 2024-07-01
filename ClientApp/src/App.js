import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import BrowserRouter and useParams
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/boards/3">3x3 Board</Link>
          </li>
          <li>
            <Link to="/boards/4">4x4 Board</Link>
          </li>
          <li>
            <Link to="/boards/5">5x5 Board</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Define routes for different board sizes */}
        <Route path="/boards/:size" element={<BoardPage />} />
      </Routes>
    </div>
  );
}


function BoardPage() {
  const { size } = useParams();
  console.log(size); // Added for verification
  return (
    <div>
      <h2>Board Page Rendered</h2> {/* Added for verification */}
      <Board size={parseInt(size)} />
    </div>
  );
}

export default App;