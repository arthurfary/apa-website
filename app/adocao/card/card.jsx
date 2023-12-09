import styles from './card.module.css'

const CardMaker = ({nome, idade, raca, porte, desc, image}) => {

    const calculaIdade = (dias) => {
      if (dias/365 >= 1){
        return parseInt(dias/365).toString() + (parseInt(dias/365) > 1 ? " anos" : " ano")
      }
      else if(dias/12 >= 1){
        return parseInt(dias/12).toString() + (parseInt(dias/12) > 1 ? " meses" : " mês")
      }
      else if(dias/4 >= 1){
        return parseInt(dias/4).toString() + (parseInt(dias/4) > 1 ? " semanas" : " semana")
      }
      else{
        return dias.toString() + (dias > 1 ? " dias" : " dia")
      }
    }

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
                <text3>Raça</text3>
                <text2>{raca}</text2>
              </d>
              <d>
                <text3>Porte</text3>
                <text2>{porte}</text2>
              </d>
            </subDiv>

            <subDiv>
              <d>
                <text3>Idade</text3>
                <text2>{calculaIdade(idade)}</text2>
              </d>
            </subDiv>
  
            <div className={styles.cardInfo}>
              <text3>Sobre o pet</text3>
              <text2>{desc}</text2>
            </div>
  
            <a className={styles.cardAdotar} href={"mailto:lucianosbs151@gmail.com?&subject=Gostaria de adotar o " + nome}>
              Entrar Em Contato
            </a>
  
          </div>
  
        </div>
      /*</div>*/
    )
  }


export default CardMaker