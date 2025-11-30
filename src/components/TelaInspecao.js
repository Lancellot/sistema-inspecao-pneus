import React from 'react';
import { styles } from '../styles/styles';

function TelaInspecao({ inspecaoAtual, setInspecaoAtual, setTelaAtual, setInspecoes, inspecoes }) {
  const adicionarMovimentacao = (pneu) => {
    const novaMovimentacao = prompt('Digite a movimentação:');
    if (novaMovimentacao) {
      setInspecaoAtual((prev) => ({
        ...prev,
        pneus: {
          ...prev.pneus,
          [pneu]: {
            ...prev.pneus[pneu],
            movimentacoes: [...prev.pneus[pneu].movimentacoes, novaMovimentacao],
          },
        },
      }));
    }
  };

  const adicionarRecapagem = (pneu) => {
    const novaRecapagem = prompt('Digite a recapagem:');
    if (novaRecapagem) {
      setInspecaoAtual((prev) => ({
        ...prev,
        pneus: {
          ...prev.pneus,
          [pneu]: {
            ...prev.pneus[pneu],
            recapagens: [...prev.pneus[pneu].recapagens, novaRecapagem],
          },
        },
      }));
    }
  };

  const finalizarInspecao = () => {
    if (!inspecaoAtual.placaCaminhao) {
      alert('Preencha a Placa do Caminhão!');
      return;
    }

    const novaInspecao = {
      ...inspecaoAtual,
      id: Date.now(),
      dataRegistro: new Date().toLocaleString(),
    };

    setInspecoes([...inspecoes, novaInspecao]);
    alert('Inspeção finalizada com sucesso!');
    setTelaAtual('menu');

    // Limpar formulário
    setInspecaoAtual({
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
        '4B': { movimentacoes: [], recapagens: [] },
      },
      observacoes: '',
    });
  };

  return (
    <div style={styles.containerInspecao}>
      <div style={styles.cardInspecao}>
        <h1 style={styles.tituloInspecao}>Tela de Inspeção</h1>

        {/* Seção superior */}
        <div style={styles.secaoSuperior}>
          <div style={styles.inputGroupInline}>
            <label style={styles.labelInspecao}>Placa do Caminhão</label>
            <input
              type="text"
              value={inspecaoAtual.placaCaminhao}
              onChange={(e) =>
                setInspecaoAtual({ ...inspecaoAtual, placaCaminhao: e.target.value })
              }
              style={styles.inputInspecao}
              placeholder="Insira a Placa do Caminhão"
            />
            <button onClick={() => alert('Inspeção criada!')} style={styles.botaoCriar}>
              Criar Inspeção
            </button>
          </div>

          <div style={styles.inputGroupBlock}>
            <label style={styles.labelInspecao}>Quantos Km desde última manutenção</label>
            <input
              type="text"
              value={inspecaoAtual.kmUltimaManutencao}
              onChange={(e) =>
                setInspecaoAtual({ ...inspecaoAtual, kmUltimaManutencao: e.target.value })
              }
              style={styles.inputInspecao}
              placeholder="Ouve movimentação de Pneu"
            />
          </div>

          <div style={styles.inputGroupBlock}>
            <label style={styles.labelInspecao}>Ouve algum tipo de movimentação de pneu?</label>
            <input
              type="text"
              value={inspecaoAtual.tipoMovimentacao}
              onChange={(e) =>
                setInspecaoAtual({ ...inspecaoAtual, tipoMovimentacao: e.target.value })
              }
              style={styles.inputInspecao}
              placeholder="Ouve movimentação de Pneu"
            />
          </div>
        </div>

        {/* Grid de Pneus */}
        <div style={styles.gridPneus}>
          {/* Coluna 1 */}
          <div style={styles.colunaPneus}>
            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 1A</button>
              <button onClick={() => adicionarRecapagem('1A')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('1A')} style={styles.botaoAcao}>
                ADD MOV
              </button>
              {inspecaoAtual.pneus['1A'].recapagens.map((r, i) => (
                <div key={i} style={styles.itemAdicionado}>
                  {r}
                </div>
              ))}
            </div>

            <div style={styles.conectoresVertical}></div>

            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 1B</button>
              <button onClick={() => adicionarRecapagem('1B')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('1B')} style={styles.botaoAcao}>
                ADD MOV
              </button>
              {inspecaoAtual.pneus['1B'].movimentacoes.map((m, i) => (
                <div key={i} style={styles.itemAdicionado}>
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.conectoresHorizontal}></div>

          {/* Coluna 2 */}
          <div style={styles.colunaPneus}>
            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 2A</button>
              <button onClick={() => adicionarRecapagem('2A')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('2A')} style={styles.botaoAcao}>
                ADD MOV
              </button>
              {inspecaoAtual.pneus['2A'].movimentacoes.map((m, i) => (
                <div key={i} style={styles.itemAdicionado}>
                  {m}
                </div>
              ))}
            </div>

            <div style={styles.conectoresVertical}></div>

            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 2B</button>
              <button onClick={() => adicionarRecapagem('2B')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('2B')} style={styles.botaoAcao}>
                ADD MOV
              </button>
            </div>
          </div>

          <div style={styles.conectoresHorizontal}></div>

          {/* Coluna 3 */}
          <div style={styles.colunaPneus}>
            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 3A</button>
              <button onClick={() => adicionarRecapagem('3A')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('3A')} style={styles.botaoAcao}>
                ADD MOV
              </button>
            </div>

            <div style={styles.conectoresVertical}></div>

            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 3B</button>
              <button onClick={() => adicionarRecapagem('3B')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('3B')} style={styles.botaoAcao}>
                ADD MOV
              </button>
            </div>
          </div>

          {/* Coluna 4 */}
          <div style={styles.colunaPneus}>
            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 4A</button>
              <button onClick={() => adicionarMovimentacao('4A')} style={styles.botaoAcao}>
                ADD MOV
              </button>
              <button onClick={() => adicionarRecapagem('4A')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
            </div>

            <div style={styles.conectoresVertical}></div>

            <div style={styles.pneuBox}>
              <button style={styles.botaoPneu}>Pneu 4B</button>
              <button onClick={() => adicionarRecapagem('4B')} style={styles.botaoAcao}>
                ADD RECAP
              </button>
              <button onClick={() => adicionarMovimentacao('4B')} style={styles.botaoAcao}>
                ADD MOV
              </button>
            </div>
          </div>
        </div>

        {/* Observações */}
        <div style={styles.secaoObservacoes}>
          <label style={styles.labelInspecao}>Observações</label>
          <textarea
            value={inspecaoAtual.observacoes}
            onChange={(e) => setInspecaoAtual({ ...inspecaoAtual, observacoes: e.target.value })}
            style={styles.textareaInspecao}
            placeholder="Insira Observações Adicionais sobre movimentação, recapagem e outros casos isolados"
          />
        </div>

        {/* Botões de ação */}
        <div style={styles.botoesFinais}>
          <button onClick={finalizarInspecao} style={styles.botaoFinalizar}>
            FINALIZAR INSPEÇÃO
          </button>
          <button onClick={() => setTelaAtual('menu')} style={styles.botaoVoltar}>
            Voltar ao Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaInspecao;
