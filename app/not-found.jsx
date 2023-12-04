'use client'

import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';
import SitePage from './components/page_type/site';

export default function Custom404() {
    return (
        <SitePage>
            <div className={styles.errorContainer}>
                <h1 className={styles.errorTitle}>Error 404</h1>
                <p className={styles.errorMessage}>Página não encontrada</p>
                <Link className={styles.homeLink} href="/">Voltar para a página inicial</Link>
            </div>
        </SitePage>
    );
}