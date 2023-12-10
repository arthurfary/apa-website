'use client'

import styles from './card.module.css';

import { useState } from 'react';

import Load from '@/app/components/load/load';
import CardEdit from './cardEdit';

import { deletarPonto } from '@/app/functions/removePonto';

function Card({ id, nome, rua, numero, cidade, estado, cep, setRefresh, refresh }) {

  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  async function removerAtividade() {
    setLoading(true)

    deletarPonto(id)
    .then(() => {
      setRefresh(!refresh);
    })
    .catch(error => alert(error));

    setLoading(false)
  }

  return !edit ? (
    <div className={styles.card}>
      <h2>{nome}</h2>
      <p>Rua: {rua}, Número: {numero}</p>
      <p>Cidade: {cidade}, Estado: {estado}, CEP: {cep}</p>
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
      rua={rua} 
      numero={numero} 
      cidade={cidade} 
      estado={estado} 
      cep={cep} 
      setRefresh={setRefresh} 
      refresh={refresh} 
      setEdit={setEdit} 
    />
  );
};


export default Card;
