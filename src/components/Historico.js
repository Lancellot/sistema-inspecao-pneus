import React from 'react';
import { styles } from '../styles/styles';
import Header from './Header';

function Historico({ inspecoes, setTelaAtual, usuario, setUsuarioLogado }) {
  return (
    <div>
      <Header
        title="Histórico"
        usuario={usuario}
        onLogout={() => {
          setUsuarioLogado && setUsuarioLogado(null);
          setTelaAtual('login');
        }}
      />

      <div style={styles.containerLogin1}>
        <div style={styles.cardLargo}>
          <h1 style={styles.tituloLogin}>Histórico de Inspeções</h1>
          {inspecoes.length === 0 ? (
            <p style={styles.textoVazio}>Nenhuma inspeção registrada ainda.</p>
          ) : (
            <div style={styles.listaInspecoes}>
              {inspecoes.map((inspecao) => (
                <div key={inspecao.id} style={styles.itemInspecao}>
                  <h3>Placa: {inspecao.placaCaminhao}</h3>
                  <p>
                    <strong>Registrado em:</strong> {inspecao.dataRegistro}
                  </p>
                  <p>
                    <strong>KM última manutenção:</strong> {inspecao.kmUltimaManutencao}
                  </p>

                  <details>
                    <summary style={styles.summary}>Ver detalhes dos pneus</summary>
                    <div style={styles.detalhes}>
                      {Object.entries(inspecao.pneus).map(([pneu, dados]) => (
                        <div key={pneu} style={styles.detalhesPneu}>
                          <strong>Pneu {pneu}:</strong>
                          {dados.movimentacoes.length > 0 && (
                            <div>Movimentações: {dados.movimentacoes.join(', ')}</div>
                          )}
                          {dados.recapagens.length > 0 && (
                            <div>Recapagens: {dados.recapagens.join(', ')}</div>
                          )}
                        </div>
                      ))}
                      {inspecao.observacoes && (
                        <p>
                          <strong>Obs:</strong> {inspecao.observacoes}
                        </p>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          )}

          <button onClick={() => setTelaAtual('menu')} style={styles.botao}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Historico;
