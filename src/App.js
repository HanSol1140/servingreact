
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Headers';
import RobotSettings from './components/RobotSettings';
import RobotList from './components/RobotList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Headers></Headers>
        <Routes>
          <Route path="/" element={<RobotList/>}/>
          <Route path="/RobotSettings" element={<RobotSettings/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
