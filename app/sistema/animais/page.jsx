'use client'

import SystemPage from '@/app/components/page_type/sistema';
import styles from '@/app/sistema/animais/page.module.css';
import { useEffect, useState } from 'react';

import Card from './card/card';

function Animais(){

    const [animais, setAnimais] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        fetch('https://apasbs.000webhostapp.com/obterPets.php')
            .then(response => response.json())
            .then(data => setAnimais(data.pets));
    }, []);

    function alteraCard() {
        setShowAddForm(!showAddForm);
    };

    return (
        <SystemPage>
            <main className={styles.main}>
                <div>
                    <h1>Animais para Adoção</h1>
                </div>

                <div className={styles.cardGrid}>
                    {showAddForm ? (
                        <div className={styles.addCardForm}>
                            <input className={styles.inputField} type="text" placeholder="Nome" name='nome' />
                            <input className={styles.inputField} type="text" placeholder="Espécie" name='especie' />
                            <input className={styles.inputField} type="text" placeholder="Upload da Foto" name='foto' />
                            <div>
                                <button className={`${styles.button} ${styles.salvar}`}>Salvar</button>
                                <button className={`${styles.button} ${styles.cancelar}`} onClick={alteraCard}>Cancelar</button>
                            </div>
                        </div>
                    ) : (
                        <div className={`${styles.cardCommon} ${styles.addCard}`} onClick={alteraCard}>
                            +
                        </div>
                    )}

                    {animais.map((animal, index) => (
                        <div className={styles.cardCommon} key={index}>
                            <Card id={animal.id} nome={animal.nome} especie={animal.especie} foto={animal.foto} />
                        </div>
                    ))}
                </div>
            </main>
        </SystemPage>
    );
}

export default Animais;
