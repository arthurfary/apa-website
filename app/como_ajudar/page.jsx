import SitePage from "../components/page_type/site"
import styles from "./comoajudar.module.css"
import Image from "next/image"

import rampa from "@/public/rampa_reversa.png"
import racao from "@/public/racao.png"
import espiral from "@/public/Espiral_seta.png"
import esponga from "@/public/Adote_agora_1.png"
import adota from "@/public/Me_adota.png"
import pet from "@/public/Pet.png"
import pata from "@/public/Patas_reversas.png"



export default function Contato() {
  return (
    <SitePage >
      <div className={styles.titulo}>
        <h1>Como ajudar</h1>
      </div>

      <div className={styles.tex1}>
        <h1>Somos uma associação sem fins lucrativos, e através do
            nosso trabalho a gente conecta pessoas que querem ter um
            pet a cães e gatos resgatados que precisam de um lar
        </h1>
      </div>

      <div className={styles.rever}>
        <Image src={pata} className={styles.patas}/>
      </div>

      <div className={styles.ramp}>
        <Image src={rampa} className={styles.ramprever}/>
      </div>

      <div className={styles.comi}>
        <Image src={racao} className={styles.comida}/>
      </div>
  
      <div className={styles.tex2}>
        <h1>Doações via PIX</h1>
      </div>

      <div className={styles.tex3}>
        Você pode nos ajudar financeiramente fazendo sua doação!
      </div>

      <div className={styles.pix}>
        <h1>Chave PIX: CNPJ 09152206000101</h1>
      </div>

      <div className={styles.espira}>
        <Image src={espiral} className={styles.seta}/>
      </div>

      <div className={styles.tex4}>
        <h1>Seja voluntário</h1>
      </div>
      <div className={styles.tex5}>Se gosta de animais e tem tempo livre para lhes dedicar, junte se a nós!</div>

      <div className={styles.verde}>
        <Image src={esponga} className={styles.ver}/>
      </div>

      <div className={styles.cachorro}>
        <Image src={adota} className={styles.quatro}/>
      </div>
      
      <div className={styles.vasilha}>
        <Image src={pet} className={styles.pote}/>
      </div>

    </SitePage>
  );
}