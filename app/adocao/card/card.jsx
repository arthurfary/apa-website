import styles from './card.module.css'

const CardMaker = ({id, nome, peso, idade, especie, porte, info, image}) => {
    return(
      /*<div className={styles.card}>*/
        <div className={styles.cardContainer}>
          <div className={styles.cardImageContainer}>
            <img src={image} className={styles.cardImage} alt="card image"/>
          </div>
  
          <div className={styles.cardInfoContainer}>
            <text1>{nome}</text1>
  
            <subDiv>
              <d>
                <text3>Peso</text3>
                <text2>{peso}</text2>
              </d>
              <d>
                <text3>Idade</text3>
                <text2>{idade}</text2>
              </d>
            </subDiv>
  
            <subDiv>
              <d>
                <text3>Espécie</text3>
                <text2>{especie}</text2>
              </d>
              <d>
                <text3>Porte</text3>
                <text2>{porte}</text2>
              </d>
            </subDiv>
  
            <div className={styles.cardInfo}>
              <text3>Sobre o pet</text3>
              <text2>{info}</text2>
            </div>
  
            <a href={"mailto:lucianosbs151@gmail.com?&subject=Gostaria de adotar o " + nome}>
              adotar
            </a>
  
          </div>
  
        </div>
      /*</div>*/
    )
  }


export default CardMaker