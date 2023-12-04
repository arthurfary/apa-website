'use client'

import React from 'react';
import Link from 'next/link';
import styles from './404.module.css'; // Importando o módulo CSS

export default function Custom404() {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorMessage}>Página não encontrada</p>
            <Link href="/">
                Voltar para a página inicial
            </Link>
        </div>
    );
}