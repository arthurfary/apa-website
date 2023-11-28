'use client'

import SystemPage from '@/app/components/page_type/sistema';
import styles from '@/app/sistema/animais/page.module.css';
import { useEffect, useState } from 'react';

import Card from './card/card';
import ImageUpload from '@/app/components/image_upload/image_upload';

function Animais(){

    const [animais, setAnimais] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [image, setImage] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://apasbs.000webhostapp.com/obterPets.php')
            .then(response => response.json())
            .then(data => setAnimais(data.pets));
    }, [refresh]);

    function alteraCard() {
        setShowAddForm(!showAddForm);
    };

    function salvarNovo(){
        const nome = document.querySelector('input[name="nome"]').value;
        const especie = document.querySelector('input[name="especie"]').value;
        const foto = image;

        fetch('https://apasbs.000webhostapp.com/salvarPet.php', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                especie: especie,
                foto: foto
            })
        })
            .then(response => response.json())
            .then(data => {
                setRefresh(!refresh);
            });
    }

    return (
        <SystemPage>
            <main className={styles.main}>
                <div>
                    <h1>Animais para Adoção</h1>
                </div>

                <section className={styles.cardGrid}>
                    {showAddForm ? (
                        <div className={styles.addCardForm}>
                            <input className={styles.inputField} type="text" placeholder="Nome" name='nome' />
                            <input className={styles.inputField} type="text" placeholder="Espécie" name='especie' />
                            <ImageUpload setImage={setImage} image={image} />
                            <div>
                                <button className={`${styles.button} ${styles.salvar}`} onClick={salvarNovo} >Salvar</button>
                                <button className={`${styles.button} ${styles.cancelar}`} onClick={alteraCard} >Cancelar</button>
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
                </section>
            </main>
        </SystemPage>
    );
}

export default Animais;
