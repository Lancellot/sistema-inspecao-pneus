import React from 'react';
import { styles } from '../styles/styles';

function Relatorios({ inspecoes, setTelaAtual }) {
    const totalInspecoes = inspecoes.length;

    const totalRecapagens = inspecoes.reduce((acc, insp) => {
        return acc + Object.values(insp.pneus).reduce((sum, pneu) => sum + pneu.recapagens.length, 0);
    }, 0);

    const totalMovimentacoes = inspecoes.reduce((acc, insp) => {
        return acc + Object.values(insp.pneus).reduce((sum, pneu) => sum + pneu.movimentacoes.length, 0);
    }, 0);

    return (
        <div style={styles.containerLogin1}>
            <div style={styles.cardLogin1}>
                <h1 style={styles.tituloLogin}>Relatórios</h1>
                <div style={styles.relatorioBox}>
                    <h3>Resumo Geral</h3>
                    <p><strong>Total de Inspeções:</strong> {totalInspecoes}</p>
                    <p><strong>Total de Recapagens:</strong> {totalRecapagens}</p>
                    <p><strong>Total de Movimentações:</strong> {totalMovimentacoes}</p>
                    <p><strong>Caminhões Inspecionados:</strong> {new Set(inspecoes.map(i => i.placaCaminhao)).size}</p>
                </div>
                <button onClick={() => setTelaAtual('menu')} style={styles.botao}>
                    Voltar
                </button>
            </div>
        </div>
    );
}

export default Relatorios;