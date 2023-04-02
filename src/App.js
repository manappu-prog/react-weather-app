import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SearchBox from './components/SearchBox';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <SearchBox placeHolder="Type city name..." />
      <Card />
    </div>
  );
}

export default App;
