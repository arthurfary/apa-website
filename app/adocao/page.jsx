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


import CardMaker from "./card/card";

export default function Adocao() {
  const [pets, setPets] = useState(null)

  useEffect(() => {
    fetchPets()
    .then(data =>{
      setPets(data)
    })
    .catch(error => console.error(error));
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
        {pets?.map((pet, i) => (
                <CardMaker key={i} id={pet.id} nome={pet.nome} especie={pet.especie} image={pet.foto}/>
              ))
        }
        </div>
        
        
      </main>
    </SitePage>
  )
}
