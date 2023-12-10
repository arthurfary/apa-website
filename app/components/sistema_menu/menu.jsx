import React from 'react';
import Link from 'next/link';
import styles from './menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.horizontalMenuContainer}>

      <Link href="/sistema/animais">
        <div className={styles.menuItem}>
          <p>Animais para Adoção</p>
        </div>
      </Link>

      <Link href="/sistema/pontos_de_coleta">
        <div className={styles.menuItem}>
          <p>Pontos de Coleta</p>
        </div>
      </Link>

      <Link href="/sistema/noticias">
        <div className={styles.menuItem}>
          <p>Notícias</p>
        </div>
      </Link>

    </nav>
  );
}