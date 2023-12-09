'use client'

import styles from '@/app/sistema/noticias/page.module.css';
import { useEffect, useState } from 'react';
import SystemPage from '@/app/components/page_type/sistema';
import Load from '@/app/components/load/load';
import Card from './card/card';
import ImageUpload from '@/app/components/image_upload/image_upload';

function Noticias() {
    const [noticias, setNoticias] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [image, setImage] = useState(null); // Estado para a imagem
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/obterNoticias', {
            cache: 'no-store',
        })
        .then(response => response.json())
        .then(data => setNoticias(data.rows));
    }, [refresh]);

    function alteraCard() {
        setShowAddForm(!showAddForm);
        setImage(null); // Limpa a imagem quando o formulário é fechado
    };

    async function salvarNovaNoticia() {
        setLoading(true)
        const titulo = document.querySelector('input[name="titulo"]').value;
        const conteudo = document.querySelector('textarea[name="conteudo"]').value;
        const imagem = image; // Obtém a imagem carregada

        if (!titulo || !conteudo || !imagem) {
            alert('Preencha todos os campos, incluindo a imagem!');
            setLoading(false)
            return;
        }

        const dataPublicacaoAtual = new Date().toISOString().split('T')[0];

        await fetch('/api/salvarNoticia', {
            method: 'POST',
            body: JSON.stringify({
                titulo: titulo,
                conteudo: conteudo,
                imagem: imagem, // Inclui a imagem no corpo da requisição
                dataPublicacao: dataPublicacaoAtual
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
                            <div className={styles.imageUploadSection}>
                                <ImageUpload setImage={setImage} image={image} size={300} />
                            </div>
                            <div className={styles.formCard}>
                                <input className={styles.inputField} type="text" placeholder="Título" name='titulo' />
                                <textarea className={styles.textareaField} placeholder="Conteúdo" name='conteudo' ></textarea>
                                <p className={styles.dataPublicacao}>Data de Publicação: {new Date().toLocaleDateString('pt-BR')}</p>
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
                            imagem={noticia.imagem}
                        />
                    ))}
                </section>
            </main>
        </SystemPage>
    );
}

export default Noticias;
