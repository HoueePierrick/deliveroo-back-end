import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { library   } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
