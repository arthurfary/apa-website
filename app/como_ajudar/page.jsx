"use client"
import { useState, useEffect } from 'react';

import SitePage from "../components/page_type/site";
import styles from "./comoajudar.module.css";
import Image from "next/image";

import reversaRampa from "@/public/rampa_reversa.png";
import racaoImage from "@/public/racao.png";
import setaEspiral from "@/public/Espiral_seta.png";

import patasReversas from "@/public/Patas_reversas.png";

import coletaBg from '@/public/comoajudar-bg-coleta.png'
import PtoColeta from "../components/ponto_coleta/ptoColeta"

import { fetchPontos } from '../functions/fetchPontos';

export default function ComoAjudar() {
  const [pontos, setPontos] = useState(null);

  useEffect(() => {
    fetchPontos()
    .then(data => {
      setPontos(data);
    })
    .catch(error => console.error(error));
  }, [])

  return (
    <SitePage>
      <div className={styles.display}>
        <div className={styles.titulo}>
          <h1>Como posso ajudar?</h1>
        </div>

        <div className={styles.tex1}>
            <p>
              Somos uma associação sem fins lucrativos e, através do nosso
              trabalho, conectamos pessoas que desejam ter um pet a cães e
              gatos resgatados que precisam de um lar!
            </p>
          
        </div>
        <Image src={patasReversas} className={styles.patas} alt="Imagem de patas de animais" />

        <div className={styles.conjunto}>
          <Image src={reversaRampa} className={styles.ramprever} alt="Imagem de uma rampa reversa" />
          <Image src={racaoImage} className={styles.comida} alt="Imagem de comida para animais" />
          <Image src={setaEspiral} className={styles.seta} alt="Imagem de uma seta espiral" />
       

        <div className={styles.tex2}>
          <h2>Doações via PIX</h2>
        </div>

        <div className={styles.tex3}>
          <p>Você pode nos ajudar financeiramente fazendo sua doação!</p>
        </div>

        <div className={styles.pix}>
          <h2>Chave PIX: CNPJ 09152206000101</h2>
        </div>
        </div>
        <div className={styles.tex4}>
          <h1>Seja voluntário</h1>
        </div>

        <div className={styles.tex5}>
          <p>Se você gosta de animais e tem tempo livre para se dedicar, junte-se a nós!</p>
        </div>

          {/* Pontos de Coleta */}
          <div className={styles.coletaDisplay1}>
            <Image src={coletaBg} className={styles.coletaBg} alt="Imagem de fundo para o texto sobre coleta de doação." />
            <div className={styles.coletaT1}>Pontos de coleta para doações</div>
            <div className={styles.coletaT2}>Você pode realizar a doação de ração, medicamentos e produtos de limpeza em nossos pontos de coleta parceiros:</div>
          </div>

          <div className={styles.coletaDisplay2}>
            {/* <PtoColeta/> */}
            {pontos?.map((ponto, key) => 
              <PtoColeta key={key} nome={ponto.nome} rua={ponto.rua} numero={ponto.numero} cidade={ponto.cidade} estado={ponto.estado} cep={ponto.cep}/>
            )}

          </div>

      </div>
    </SitePage>
  );
}
