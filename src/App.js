import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Body />
      </div>
      <footer>
        Made with <FavoriteBorderIcon className="love" /> by Sameer
      </footer>
    </div>
  );
}

export default App;
