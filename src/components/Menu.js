import React from 'react';
import { styles } from '../styles/styles';

function Menu({ usuarioLogado, setTelaAtual, setUsuarioLogado }) {
    return (
        <div style={styles.containerLogin1}>
            <div style={styles.cardLogin1}>
                <h1 style={styles.tituloLogin}>Bem-vindo, {usuarioLogado?.nome}!</h1>
                <div style={styles.menuGrid}>
                    <button onClick={() => setTelaAtual('inspecao')} style={styles.botaoMenu}>
                        Nova Inspeção
                    </button>
                    <button onClick={() => setTelaAtual('historico')} style={styles.botaoMenu}>
                        Histórico
                    </button>
                    <button onClick={() => setTelaAtual('relatorios')} style={styles.botaoMenu}>
                        Relatórios
                    </button>
                    <button
                        onClick={() => {
                            setUsuarioLogado(null);
                            setTelaAtual('login');
                        }}
                        style={styles.botaoMenu}
                    >
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;