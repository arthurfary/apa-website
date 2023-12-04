'use client'

import styles from './cardEdit.module.css';

import { useState } from 'react';

import Load from '@/app/components/load/load';

function CardEdit({ id, titulo, conteudo, dataPublicacao, setRefresh, refresh, setEdit }) {

    const [loading, setLoading] = useState(false);
    const [tituloEdit, setTituloEdit] = useState(titulo);
    const [conteudoEdit, setConteudoEdit] = useState(conteudo);

    function salvarAlteracao() {
        setLoading(true)

        if (!tituloEdit || !conteudoEdit) {
            alert('Preencha todos os campos!');
            setLoading(false);
            return;
        }

        fetch('/api/salvarNoticia', { // Endpoint para salvar a notícia editada
            method: 'POST',
            body: JSON.stringify({
                id: id,
                titulo: tituloEdit,
                conteudo: conteudoEdit,
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
            <p className={styles.dataPublicacao}>Data de Publicação: {new Date(dataPublicacao).toLocaleDateString('pt-BR')}</p>
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
    );
};

export default CardEdit;
