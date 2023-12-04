'use client'

import SystemPage from '@/app/components/page_type/sistema';
import styles from '@/app/sistema/animais/page.module.css';
import { useEffect, useState } from 'react';

import Load from '@/app/components/load/load';
import Card from './card/card';
import ImageUpload from '@/app/components/image_upload/image_upload';

function Animais(){

    const [animais, setAnimais] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [image, setImage] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/obterPets',{
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate', // Impede o cache
                'Pragma': 'no-cache', // Suporte para navegadores mais antigos
                'Expires': '0' // Data de expiração passada para impedir o cache
            }
        })
            .then(response => response.json())
            .then(data => setAnimais(data.rows));
    }, [refresh]);

    function alteraCard() {
        setShowAddForm(!showAddForm);
        setImage(false)
    };

    async function salvarNovo(){
        setLoading(true)
        const nome = document.querySelector('input[name="nome"]').value;
        const especie = document.querySelector('input[name="especie"]').value;
        const foto = image;

        if (!nome || !especie || !foto) {
            alert('Preencha todos os campos!');
            setLoading(false)
            return;
        }

        await fetch('/api/salvarPet', {
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
                alteraCard();
                setLoading(false)
            });
        setLoading(false)
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
                            {loading === false && 
                                <div>
                                    <button className={`${styles.button} ${styles.salvar}`} onClick={salvarNovo} >Salvar</button>
                                    <button className={`${styles.button} ${styles.cancelar}`} onClick={alteraCard} >Cancelar</button>
                                </div>
                            }
                            {loading === true &&
                                <div className={styles.loading}>
                                    <Load size={30}/>
                                </div>
                            }
                        </div>
                    ) : (
                        <div className={`${styles.cardCommon} ${styles.addCard}`} onClick={alteraCard}>
                            +
                        </div>
                    )}

                    {animais.map((animal, index) => (

                        <Card id={animal.id} nome={animal.nome} especie={animal.especie} foto={animal.foto} setRefresh={setRefresh} refresh={refresh} />

                    ))}
                </section>
            </main>
        </SystemPage>
    );
}

export default Animais;
