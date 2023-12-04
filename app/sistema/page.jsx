'use client'

import SystemPage from '../components/page_type/sistema';
import Link from 'next/link';
import styles from './page.module.css'; // Importando o módulo CSS

function Home() {
    return (
        <SystemPage>
            <div className={styles.styledDiv}>
                <h1 className={styles.title}>Sistema de Gerenciamento</h1>
                <p className={styles.subtitle}>Bem-vindo ao sistema para gerenciamento de informações apresentadas no site!</p>
                
                <div className={styles.gridContainer}>

                  <Link href="/sistema/animais">
                    <div className={styles.gridItem}>
                      <p>Animais para Adoção</p>
                    </div>
                  </Link>

                  <Link href="/sistema/atividades">
                    <div className={styles.gridItem}>
                      <p>Atividades</p>
                    </div>
                  </Link>

                  <Link href="/sistema/noticias">
                    <div className={styles.gridItem}>
                      <p>Notícias</p>
                    </div>
                  </Link>

                </div>
            </div>
        </SystemPage>
    );
}

export default Home;