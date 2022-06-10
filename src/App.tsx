import './App.css';
import StarWarsProvider, { StarWarsContext } from './contexts/starwars.context';
import AutoComplete from './components/shared/auto-complete/AutoComplete';
import Loading from './components/shared/loading/Loading';
import LoadingProvider from './contexts/loading.context';

const App = () => {

  return (
    <LoadingProvider>
      <StarWarsProvider>
        <div className="App">
          <Loading></Loading>
          <header className="App-header">
            <nav className='header__nav'></nav>
          </header>
          <div className='container'>
            <AutoComplete context={StarWarsContext}></AutoComplete>
          </div>
        </div>
      </StarWarsProvider>
    </LoadingProvider>
  );
}

export default App;
