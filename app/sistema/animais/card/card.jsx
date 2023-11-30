'use client'

import styles from './card.module.css';

import Load from '@/app/components/load/load';
import { useState } from 'react';

function Card({id, nome, especie, adotado, foto, setRefresh, refresh}){

  const [loading, setLoading] = useState(false);

  async function removerPet(){

    setLoading(true)

    await fetch('/api/deletarPet?id='+id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
          setRefresh(!refresh);
        });

    setLoading(false)
  }


  return (
    <div className={styles.card}>
      <h2>{nome}</h2>
      <p>{especie}</p>
      <p>{adotado ? 'Adotado' : 'Disponível para adoção'}</p>
      <img src={foto} alt={`Foto de ${nome}`} />
      {loading === false && <button className={styles.remover} onClick={removerPet}>Remover</button>}
      {loading === true && 
        <div className={styles.loading}>
          <Load size={30}/>
        </div>
      }
    </div>
  );
};

export default Card;