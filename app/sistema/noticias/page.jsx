'use client'

import styles from '@/app/sistema/noticias/page.module.css';

import { useEffect, useState } from 'react';

import SystemPage from '@/app/components/page_type/sistema';
import Load from '@/app/components/load/load';
import Card from './card/card';

function Noticias() {

    const [noticias, setNoticias] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/obterNoticias',{
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate', // Impede o cache
                'Pragma': 'no-cache', // Suporte para navegadores mais antigos
                'Expires': '0' // Data de expiração passada para impedir o cache
            }
        })
            .then(response => response.json())
            .then(data => setNoticias(data.rows));
    }, [refresh]);

    function alteraCard() {
        setShowAddForm(!showAddForm);
    };

    async function salvarNovaNoticia() {
        setLoading(true)
        const titulo = document.querySelector('input[name="titulo"]').value;
        const conteudo = document.querySelector('textarea[name="conteudo"]').value;
        const dataPublicacaoAtual = new Date().toISOString().split('T')[0]; // Data de publicação atual

        if (!titulo || !conteudo) {
            alert('Preencha todos os campos!');
            setLoading(false)
            return;
        }

        await fetch('/api/salvarNoticia', {
            method: 'POST',
            body: JSON.stringify({
                titulo: titulo,
                conteudo: conteudo,
                dataPublicacao: dataPublicacaoAtual // Usando a data atual
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
                    <h1>Notícias</h1>
                </div>

                <section className={styles.cardGrid}>
                    {showAddForm ? (
                        <div className={styles.addCardForm}>
                            <input className={styles.inputField} type="text" placeholder="Título" name='titulo' />
                            <textarea className={styles.textareaField} placeholder="Conteúdo" name='conteudo' ></textarea>
                            <p className={styles.dataPublicacao}>Data de Publicação: {new Date().toLocaleDateString('pt-BR')}</p> {/* Data atual */}
                            {loading === false && 
                                <div>
                                    <button className={`${styles.button} ${styles.salvar}`} onClick={salvarNovaNoticia} >Salvar</button>
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

                    {noticias.map((noticia) => (
                        <Card 
                            id={noticia.id} 
                            titulo={noticia.titulo} 
                            conteudo={noticia.conteudo} 
                            dataPublicacao={noticia.data} 
                            setRefresh={setRefresh} 
                            refresh={refresh} 
                        />
                    ))}
                </section>
            </main>
        </SystemPage>
    );
}

export default Noticias;
