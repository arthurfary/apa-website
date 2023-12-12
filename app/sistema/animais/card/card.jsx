'use client'

import styles from './card.module.css';
import { useState } from 'react';
import Load from '@/app/components/load/load';
import CardEdit from './cardEdit';

function Card({ id, nome, raca, descricao, idade, foto, porte, setRefresh, refresh }) {
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  // Função para converter idade de dias para anos
  function calcularIdadeEmAnos(idadeEmDias) {
    const anos = Math.floor(idadeEmDias / 365);
    const mesesRestantes = idadeEmDias % 365;
    const meses = Math.floor(mesesRestantes / 30);
    const semanasRestantes = idadeEmDias % 30;
    const semanas = Math.floor(semanasRestantes / 7);
  
    // Construindo strings de anos e meses
    const anosString = anos > 0 ? `${anos} ${anos === 1 ? 'ano' : 'anos'}` : '';
    const mesesString = meses > 0 ? `${meses} ${meses === 1 ? 'mês' : 'meses'}` : '';
    const semanasString = semanas > 0 ? `${semanas} ${semanas === 1 ? 'semana' : 'semanas'}` : '';
  
    if (anos === 0 && meses === 0 && semanas > 0) {
      return semanasString; // Exibe em semanas se for menos de 1 mês
    } else if (anos === 0 && meses > 0) {
      return mesesString; // Exibe em meses se for menos de 1 ano
    } else if (anosString && mesesString) {
      return `${anosString} e ${mesesString}`; // Exibe anos e meses
    } else if (anosString) {
      return anosString; // Exibe apenas anos
    } else {
      return 'Não informada';
    }
  }

  async function removerPet() {
    setLoading(true);

    await fetch(`/api/deletarPet?id=${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        setRefresh(!refresh);
      });

    setLoading(false);
  }

  return !edit ? (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={foto} alt={`Foto de ${nome}`} className={styles.image} />
      </div>
      <div className={styles.cardDetails}>
        <h2>{nome}</h2>
        <p>Raça: {raca}</p>
        <p>Descrição: {descricao}</p>
        <p>Idade: {calcularIdadeEmAnos(idade)}</p>
        <p>Porte: {porte}</p>
      </div>
      {loading === false && (
        <div className={styles.buttonContainer}>
          <button className={styles.editar} onClick={() => setEdit(true)}>
            Editar
          </button>
          <button className={styles.remover} onClick={removerPet}>
            Remover
          </button>
        </div>
      )}
      {loading === true && (
        <div className={styles.loading}>
          <Load size={30} />
        </div>
      )}
    </div>
  ) : (
    <>
      <CardEdit
        id={id}
        nome={nome}
        raca={raca}
        descricao={descricao}
        idade={idade}
        foto={foto}
        porte={porte}
        setRefresh={setRefresh}
        refresh={refresh}
        setEdit={setEdit}
      />
    </>
  );
}

export default Card;
