"use client"
import SitePage from "../components/page_type/site"

// images
import bgTitleImage from "@/public/bg_noticias.png"
import bgCalendar from "@/public/calendar.png"

// pipoca temporaria
import pipoca from "@/public/pipoca.jpeg"

import styles from "./noticia.module.css"

import Image from "next/image"

import { useState, useEffect } from "react"


const CardMaker = ({title, postDate, image}) => {
  const titleTrimmer = (titleBef, trim) => (titleBef.length > trim ? titleBef.slice(0, trim-3) + '...' : titleBef)

  return(
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImageContainer}>
          <img src={image} className={styles.cardImage} alt="card image"/>
        </div>
      </div>
      <p>Postado em: {new Date(postDate).toLocaleDateString('pt-BR')}</p>
      <h2>{titleTrimmer(title, 80)}</h2>
    </div>
  )
}

export default function Noticias() {
  const [noticias, setNoticias] = useState(null);

  useEffect(() => {
    fetch('/api/obterNoticias', {
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setNoticias(data.rows);
    })
    .catch(error => console.error(error)); // Log any errors
  }, []);
  

  return (
    <SitePage>
        <main className={styles.background}>
          <div className={styles.titleContainer}>
            
            <Image src={bgTitleImage} className={styles.titleImage} />
            <Image src={bgCalendar} className={styles.titleCalendar} />
            <h1>Notícias</h1>
            
          </div>
           
          <div className={styles.mainContainer}>
            {noticias?.map((noticia, i) => (
              <CardMaker key={i} title={noticia.titulo} postDate={noticia.data} image={noticia.imagem}/>
            ))

            }
          </div>
        </main>
    </SitePage>
  )
}