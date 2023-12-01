"use client"
import { useState, useEffect } from 'react';
import SitePage from "../components/page_type/site";
import styles from "./comoajudar.module.css";
import Image from "next/image";

import reversaRampa from "@/public/rampa_reversa.png";
import racaoImage from "@/public/racao.png";
import setaEspiral from "@/public/Espiral_seta.png";
import adoteAgro from "@/public/Adote_agora_1.png";
import meAdota from "@/public/Me_adota.png";
import petImage from "@/public/Pet.png";
import patasReversas from "@/public/Patas_reversas.png";
import pipoca from "@/public/pipoca.jpeg"

export default function Contato() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <SitePage>
      <div className={styles.display}>
        <div className={styles.titulo}>
          <h1>Como ajudar</h1>
        </div>

        <div className={styles.tex1}>
          
            Somos uma associação sem fins lucrativos, e através do nosso
            trabalho a gente conecta pessoas que querem ter um pet a cães e
            gatos resgatados que precisam de um lar
          
        </div>
        <Image src={patasReversas} className={styles.patas} alt="Imagem de patas de animais" />
        <div className={styles.conjunto}>
          <Image src={reversaRampa} className={styles.ramprever} alt="Imagem de uma rampa reversa" />
          <Image src={racaoImage} className={styles.comida} alt="Imagem de comida para animais" />
          <Image src={setaEspiral} className={styles.seta} alt="Imagem de uma seta espiral" />
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

        <div className={styles.tex4}>
          <h1>Seja voluntário</h1>
        </div>

        <div className={styles.tex5}>
          Se gosta de animais e tem tempo livre para lhes dedicar, junte se a
          nós!
        </div>

        {/* <div className={styles.conjunto2}>
          <Image src={adoteAgro} className={styles.ver} alt="Imagem de adoção" />
          <Image src={meAdota} className={styles.quatro} alt="Imagem de um convite para adoção" />
          <Image src={petImage} className={styles.pote} alt="Imagem de um animal de estimação" />
        </div> */}

        <div className={styles.curvyRectangle}>
          <Image src={windowWidth > 700 ? adoteAgro : adoteAgro} objectPosition='center' className={styles.CurvyRectangleBg} alt="imgBg2"/> 

          <div className={styles.rectContainer}>
            
              <div className={styles.rectDiv}>
                <Image src={pipoca} className={styles.rectImage} />
              </div>
              <div className={styles.rectDiv}>
              <Image src={pipoca} className={styles.rectImage} />
              </div>
              <div className={styles.rectDiv}>
              <Image src={pipoca} className={styles.rectImage} />
              </div>
              <div className={styles.rectDiv}>
              <Image src={pipoca} className={styles.rectImage} />
              </div>
              
           
          </div>
          <Image src={petImage} className={styles.pote} alt="Imagem de um animal de estimação" />
          
          {/* <div className={styles.boneButtonContainer}>
            <div className={styles.boneButton} style={{ position: 'relative', width: '100%', height: '100%' }}>
              
              <Image src={boneImage} layout='fill' objectFit={'contain'} objectPosition='center' style={{cursor: 'pointer'}}></Image>
              <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>Adote um Pet!</h1>
            </div>
          </div> */}

          </div>

      </div>
    </SitePage>
  );
}
