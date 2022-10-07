import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path='/' element={<CardGrid />} />
      </Routes>

    </div>
  );
}

export default App;
