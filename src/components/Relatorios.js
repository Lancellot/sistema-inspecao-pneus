import React from 'react';
import { styles } from '../styles/styles';
import Header from './Header';

function Relatorios({ inspecoes, setTelaAtual, usuario, setUsuarioLogado }) {
  const totalInspecoes = inspecoes.length;

  const totalRecapagens = inspecoes.reduce((acc, insp) => {
    return acc + Object.values(insp.pneus).reduce((sum, pneu) => sum + pneu.recapagens.length, 0);
  }, 0);

  const totalMovimentacoes = inspecoes.reduce((acc, insp) => {
    return (
      acc + Object.values(insp.pneus).reduce((sum, pneu) => sum + pneu.movimentacoes.length, 0)
    );
  }, 0);

  return (
    <div>
      <Header
        title="Relatórios"
        usuario={usuario}
        onLogout={() => {
          setUsuarioLogado && setUsuarioLogado(null);
          setTelaAtual('login');
        }}
      />

      <div style={styles.containerLogin1}>
        <div style={styles.cardLogin1}>
          <h1 style={styles.tituloLogin}>Relatórios</h1>
          <div style={styles.relatorioBox}>
            <h3>Resumo Geral</h3>
            <p>
              <strong>Total de Inspeções:</strong> {totalInspecoes}
            </p>
            <p>
              <strong>Total de Recapagens:</strong> {totalRecapagens}
            </p>
            <p>
              <strong>Total de Movimentações:</strong> {totalMovimentacoes}
            </p>
            <p>
              <strong>Caminhões Inspecionados:</strong>{' '}
              {new Set(inspecoes.map((i) => i.placaCaminhao)).size}
            </p>
          </div>
          <button onClick={() => setTelaAtual('menu')} style={styles.botao}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;
