import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { library   } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';
library.add(faStar, faCircleMinus, faCirclePlus);

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
