import { useRouter } from 'next/navigation'

import styles from './card.module.css'

const CardMaker = ({id, title, postDate, image }) => {
    const titleTrimmer = (titleBef, trim) => (titleBef.length > trim ? titleBef.slice(0, trim-3) + '...' : titleBef);
    const router = useRouter()
    
    const handleCardClick = () => {
      // Pass the news data to the news page
      router.push(
        '/noticias/noticia' + '?id=' + id
      );
    };
  
    return(
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.cardContainer} >
          <div className={styles.cardImageContainer}>
            <img src={image} className={styles.cardImage} alt="card image"/>
          </div>
        </div>
        <div className={styles.cardText}>
          <p>Postado em: {new Date(postDate).toLocaleDateString('pt-BR')}</p>
          <h2>{titleTrimmer(title, 80)}</h2>
        </div>
      </div>
    )
}

  
export default CardMaker