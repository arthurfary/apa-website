"use client"
import SitePage from "../components/page_type/site"
import styles from "./adocao.module.css";
import Image from "next/image";

import bgTitleImage from "@/public/bg_noticias.png"
import bgTitlePet from "@/public/adote-pet-home.png"
import bgTitlePaws from "@/public/Patas_reversas.png"

import pipoca from "@/public/pipoca.jpeg"

import { fetchPets } from "../functions/fetchPets";
import { useState, useEffect } from "react";

import Load from "../components/load/load";

import CardMaker from "./card/card";

export default function Adocao() {
  const [pets, setPets] = useState(null)
  const [screenLoading , setScreenLoading] = useState(true);

  useEffect(() => {
    setScreenLoading(true)
    fetchPets()
    .then(data =>{
      setPets(data)
    })
    .catch(error => console.error(error))
    .then(setScreenLoading(false))
  }, [])

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
        {screenLoading && <div className={styles.load}><Load size={100}/></div>}
        {!screenLoading && pets?.length > 0 ? (pets?.map((pet, i) => (
                <CardMaker key={i} nome={pet.nome} raca={pet.raca} image={pet.foto} porte={pet.porte} idade={pet.idade} desc={pet.descricao}/>
              ))
        ) : (
          <div className={styles.semPets}>
            <h1>Não há pets para adoção por enquanto! Volte mais tarde!</h1>
            <a className={styles.goBackButton} href="/">Voltar para Home</a>
          </div>
        )
        }
        </div>
        
        
      </main>
    </SitePage>
  )
}
