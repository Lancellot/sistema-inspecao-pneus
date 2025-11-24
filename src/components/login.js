import React, { useState } from 'react';
import { styles } from '../styles/styles';
import logo from '../assets/logos/logo-pneu.png';

function Login({ setTelaAtual, setUsuarioLogado }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = () => {
        if (email && senha) {
            setUsuarioLogado({ email, nome: email.split('@')[0] });
            setTelaAtual('menu');
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return (
        
        <div style={styles.containerLogin}>
            <div style={styles.bglogin}>
                <img src={logo} alt="Logo" style={styles.logo} />
            </div>
            <div style={styles.cardLogin}>
                <h1 style={styles.tituloLogin}> Sistema de Inspeção de Pneus</h1>
                <div style={styles.formDiv}>
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
                    <button onClick={fazerLogin} style={styles.botao}>Entrar</button>
                    <button onClick={() => setTelaAtual('cadastro')} style={styles.botaoSecundario}>
                        Criar conta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;