'use client'

import styles from './card.module.css';
import Load from '@/app/components/load/load';
import CardEdit from './cardEdit';
import { useState } from 'react';

function Card({ id, nome, descricao, data, setRefresh, refresh }) {

  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  async function removerAtividade() {
    setLoading(true)

    await fetch('/api/deletarAtividade?id='+id, {
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
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>Data: {new Date(data).toLocaleDateString()}</p>
      {loading === false && 
        <>
          <button className={styles.editar} onClick={() => {setEdit(true)}}>Editar</button>
          <button className={styles.remover} onClick={removerAtividade}>Remover</button>
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
      nome={nome} 
      descricao={descricao} 
      data={data} 
      setRefresh={setRefresh} 
      refresh={refresh} 
      setEdit={setEdit} 
    />
  );
};

export default Card;
