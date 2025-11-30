import React, { useState } from 'react';
import { styles } from '../styles/styles';
import logo from '../assets/logos/logo-pneu.png';

function Login({ setTelaAtual, setUsuarioLogado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = (e) => {
    e?.preventDefault?.();
    if (email && senha) {
      setUsuarioLogado({ email, nome: email.split('@')[0] });
      setTelaAtual('menu');
    } else {
      window.alert('Preencha todos os campos!');
    }
  };

  return (
    <div style={styles.containerLogin}>
      <div style={styles.bglogin}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

      <div style={styles.cardLogin}>
        <h1 style={styles.tituloLogin}>Sistema de Inspeção de Pneus</h1>
        <form style={styles.formDiv} onSubmit={fazerLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              style={styles.input}
              placeholder="seu@email.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(ev) => setSenha(ev.target.value)}
              style={styles.input}
              placeholder="********"
            />
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button type="submit" style={styles.botao}>
              Entrar
            </button>
            <button
              type="button"
              onClick={() => setTelaAtual('cadastro')}
              style={styles.botaoSecundario}
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
