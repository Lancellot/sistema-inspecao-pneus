import React, { useState } from 'react';
import { styles } from '../styles/styles';

function Cadastro({ setTelaAtual }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerCadastro = () => {
        if (nome && email && senha) {
            alert('Cadastro realizado com sucesso!');
            setTelaAtual('login');
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return (
        <div style={styles.containerLogin}>
            <div style={styles.bglogin}></div>
            <div style={styles.cardLogin}>
                <h1 style={styles.tituloLogin}>Cadastro de Usuário</h1>
                <div style={styles.formDiv}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Nome:</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            style={styles.input}
                            placeholder="Seu nome completo"
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Senha:</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            style={styles.input}
                            placeholder="********"
                        />
                    </div>
                    <button onClick={fazerCadastro} style={styles.botao}>Cadastrar</button>
                    <button onClick={() => setTelaAtual('login')} style={styles.botaoSecundario}>
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;