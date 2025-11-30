import React from 'react';
import logo from '../assets/logos/logo-pneu.png';
import { styles } from '../styles/styles';

function Header({ title = '', usuario, onLogout, onOpenMenu }) {
  return (
    <header style={styles.headerContainer}>
      <div style={styles.headerLeft}>
        <img src={logo} alt="logo" style={styles.headerLogo} />
        <h2 style={styles.headerTitle}>{title}</h2>
      </div>

      <nav style={styles.headerNav}>
        <button style={styles.headerNavButton} onClick={onOpenMenu} aria-label="Abrir opções">
          ☰
        </button>
      </nav>

      <div style={styles.headerRight}>
        {usuario ? (
          <>
            <span style={styles.headerUser}>Olá, {usuario.nome}</span>
            <button style={styles.headerLogout} onClick={onLogout}>
              Sair
            </button>
          </>
        ) : (
          <span style={styles.headerUser}>Visitante</span>
        )}
      </div>
    </header>
  );
}

export default Header;
