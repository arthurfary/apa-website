'use client'

import styles from './card.module.css';

import { useState } from 'react';

import Load from '@/app/components/load/load';
import CardEdit from './cardEdit';

function Card({ id, titulo, conteudo, dataPublicacao, setRefresh, refresh }) {

  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  async function removerNoticia() {
    setLoading(true)

    await fetch('/api/deletarNoticia?id=' + id, { // Endpoint para deletar notícia
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      setRefresh(!refresh);
    });

    setLoading(false)
  }

  return !edit ? (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
      <p>Data de Publicação: {new Date(dataPublicacao).toLocaleDateString('pt-BR')}</p>
      {loading === false && 
        <>
          <button className={styles.editar} onClick={() => {setEdit(true)}}>Editar</button>
          <button className={styles.remover} onClick={removerNoticia}>Remover</button>
        </>
      }
      {loading === true && 
        <div className={styles.loading}>
          <Load size={30}/>
        </div>
      }
    </div>
  ) : (
    <CardEdit 
      id={id} 
      titulo={titulo} 
      conteudo={conteudo} 
      dataPublicacao={dataPublicacao} 
      setRefresh={setRefresh} 
      refresh={refresh} 
      setEdit={setEdit} 
    />
  );
};

export default Card;
