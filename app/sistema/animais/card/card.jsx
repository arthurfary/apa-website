import styles from './card.module.css';

function Card({id, nome, especie, adotado, foto}){
  return (
    <div className={styles.card}>
      <h2>{nome}</h2>
      <p>{especie}</p>
      <p>{adotado ? 'Adotado' : 'Disponível para adoção'}</p>
      <img src={foto} alt={`Foto de ${nome}`} />
    </div>
  );
};

export default Card;