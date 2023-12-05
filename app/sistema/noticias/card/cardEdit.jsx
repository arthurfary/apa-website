'use client'

import styles from './cardEdit.module.css';
import { useState } from 'react';
import Load from '@/app/components/load/load';
import ImageUpload from '@/app/components/image_upload/image_upload';

function CardEdit({ id, titulo, conteudo, dataPublicacao, setRefresh, refresh, setEdit, imagem }) {
    const [loading, setLoading] = useState(false);
    const [tituloEdit, setTituloEdit] = useState(titulo);
    const [conteudoEdit, setConteudoEdit] = useState(conteudo);
    const [image, setImage] = useState(imagem); // Estado para a imagem

    function salvarAlteracao() {
        setLoading(true);

        if (!tituloEdit || !conteudoEdit || !image) {
            alert('Preencha todos os campos, incluindo a imagem!');
            setLoading(false);
            return;
        }

        fetch('/api/salvarNoticia', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                titulo: tituloEdit,
                conteudo: conteudoEdit,
                imagem: image, // Inclui a imagem no corpo da requisição
                dataPublicacao: dataPublicacao // Mantém a data original
            })
        })
        .then(response => response.json())
        .then(data => {
            setRefresh(!refresh);
            setLoading(false);
            setEdit(false);
        });
    }

    return (
        <div className={styles.addCardForm}>
            <div className={styles.imageUploadSection}>
                <ImageUpload setImage={setImage} image={image} size={300} />
            </div>
            <div className={styles.formCard}>
                <input 
                    className={styles.inputField} 
                    type="text" 
                    placeholder="Título" 
                    name='titulo' 
                    onChange={(e) => setTituloEdit(e.target.value)}  
                    value={tituloEdit}
                />
                <textarea 
                    className={styles.textareaField} 
                    placeholder="Conteúdo" 
                    name='conteudo' 
                    onChange={(e) => setConteudoEdit(e.target.value)} 
                    value={conteudoEdit}
                ></textarea>
                <p className={styles.dataPublicacao}>
                    Data de Publicação: {new Date(dataPublicacao).toLocaleDateString('pt-BR')}
                </p>
                {loading === false && 
                    <div>
                        <button className={`${styles.button} ${styles.salvar}`} onClick={salvarAlteracao} >Salvar</button>
                        <button className={`${styles.button} ${styles.cancelar}`} onClick={() => setEdit(false)} >Cancelar</button>
                    </div>
                }
                {loading === true &&
                    <div className={styles.loading}>
                        <Load size={30}/>
                    </div>
                }
            </div>
        </div>
    );
}

export default CardEdit;
