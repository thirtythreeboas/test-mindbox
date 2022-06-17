import './App.css';
import './css/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main';

function App() {

  library.add(faAngleDown, faCheck)
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
