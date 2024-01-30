//Imports
import Menu from './Components/menu/Menu';
import SobreMim from './Components/sobreMim/sobreMim';
import Servicos from './Components/servicos/servicos';
import MinhasSkills from './Components/minhasSkills/minhasSkills';
import MeusProjetos from './Components/meusProjetos/meusProjetos'
import Rodape from './Components/rodape/rodape';

function App() {
  return (
    <div className="App">
      <Menu/>
      <SobreMim/>
      <Servicos/>
      <MinhasSkills/>
      <MeusProjetos/>
      <Rodape/>
    </div>
  );
}

export default App;
