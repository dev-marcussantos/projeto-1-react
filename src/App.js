import Header from './Components/Header/Header.js';
import PresentationSection from './Components/PresentationSection/PresentationSection.js';
import './App.css';
//import Teste from './Components/Header/Teste'; é um arquivo para testar o estado de clique e exibição de componente child

function App() {
  return (
   <div className="App">
      <div className='Header'>
        <Header/>
      </div>
      <div className='PresentationSection'>
          <PresentationSection/>
      </div>
    </div>
   //<div className='App'><Teste/></div> Caso queira testar, basta comentar todo o restante contido na tag <div className="App"></div> e tirar este comentário aqui
  );
}

export default App;
