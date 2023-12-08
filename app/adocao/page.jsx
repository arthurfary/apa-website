import SitePage from "../components/page_type/site"
import styles from "./adocao.module.css";
import Image from "next/image";

import bgTitleImage from "@/public/bg_noticias.png"
import bgTitlePet from "@/public/adote-pet-home.png"
import bgTitlePaws from "@/public/Patas_reversas.png"

import pipoca from "@/public/pipoca.jpeg"



const CardMaker = ({nome, peso, idade, especie, porte, info, image}) => {
  return(
    /*<div className={styles.card}>*/
      <div className={styles.cardContainer}>
        <div className={styles.cardImageContainer}>
          <Image src={image} className={styles.cardImage} alt="card image"/>
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

        </div>

      </div>
    /*</div>*/
  )
}



export default function Adocao() {
  return (
    <SitePage>
      <main className={styles.display}>
        <div className={styles.titleBg}>
          <Image src={bgTitleImage} className={styles.titleImage}/>
          <Image src={bgTitlePet} className={styles.titleImageMisc}/>
          <Image src={bgTitlePaws} className={styles.titleImagePaws}/>
          <h2 className={styles.titleText}>Encontre seu novo amigo</h2>
        </div>

        <div className={styles.mainContainer}>
        <CardMaker nome={'card.nome'} peso={'card.peso'} idade={'card.idade'} especie={'card.especie'} 
                            porte={'card.porte'} info={'card.info'} image={pipoca}/>

        <CardMaker nome={'card.nome'} peso={'card.peso'} idade={'card.idade'} especie={'card.especie'} 
                            porte={'card.porte'} info={'card.info'} image={pipoca}/>

        <CardMaker nome={'card.nome'} peso={'card.peso'} idade={'card.idade'} especie={'card.especie'} 
                            porte={'card.porte'} info={'card.info'} image={pipoca}/>
               
        </div>
        
        
      </main>
    </SitePage>
  )
}
