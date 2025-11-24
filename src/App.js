import React, { useState } from 'react';
import Login from './components/login.js';
import Cadastro from './components/Cadastro.js';
import Menu from './components/Menu.js';
import TelaInspecao from './components/TelaInspecao.js';
import Historico from './components/Historico.js';
import Relatorios from './components/Relatorios.js';

function App() {
  const [telaAtual, setTelaAtual] = useState('login');
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [inspecoes, setInspecoes] = useState([]);
  
  // Estado para a inspeção atual
  const [inspecaoAtual, setInspecaoAtual] = useState({
    placaCaminhao: '',
    kmUltimaManutencao: '',
    movimentacaoPneu: '',
    tipoMovimentacao: '',
    pneus: {
      '1A': { movimentacoes: [], recapagens: [] },
      '1B': { movimentacoes: [], recapagens: [] },
      '2A': { movimentacoes: [], recapagens: [] },
      '2B': { movimentacoes: [], recapagens: [] },
      '3A': { movimentacoes: [], recapagens: [] },
      '3B': { movimentacoes: [], recapagens: [] },
      '4A': { movimentacoes: [], recapagens: [] },
      '4B': { movimentacoes: [], recapagens: [] }
    },
    observacoes: ''
  });

  // Renderizar tela atual
  const renderizarTela = () => {
    switch(telaAtual) {
      case 'login': 
        return <Login setTelaAtual={setTelaAtual} setUsuarioLogado={setUsuarioLogado} />;
      
      case 'cadastro': 
        return <Cadastro setTelaAtual={setTelaAtual} />;
      
      case 'menu': 
        return <Menu 
          usuarioLogado={usuarioLogado} 
          setTelaAtual={setTelaAtual} 
          setUsuarioLogado={setUsuarioLogado} 
        />;
      
      case 'inspecao': 
        return <TelaInspecao 
          inspecaoAtual={inspecaoAtual}
          setInspecaoAtual={setInspecaoAtual}
          setTelaAtual={setTelaAtual}
          setInspecoes={setInspecoes}
          inspecoes={inspecoes}
        />;
      
      case 'historico': 
        return <Historico 
          inspecoes={inspecoes} 
          setTelaAtual={setTelaAtual} 
        />;
      
      case 'relatorios': 
        return <Relatorios 
          inspecoes={inspecoes} 
          setTelaAtual={setTelaAtual} 
        />;
      
      default: 
        return <Login setTelaAtual={setTelaAtual} setUsuarioLogado={setUsuarioLogado} />;
    }
  };

  return <div>{renderizarTela()}</div>;
}

export default App;