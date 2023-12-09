"use client"

// Importando módulos e componentes necessários
import { useState, useEffect } from "react"
import Image from "next/image"
import SitePage from "../components/page_type/site"
import Load from "../components/load/load"
import CardMaker from "./card/card"
import { fetchNoticias } from "../functions/fetchNoticias"

// Importando estilos e imagens
import styles from "./noticia.module.css"
import bgTitleImage from "@/public/bg_noticias.png"
import bgCalendar from "@/public/calendar.png"

export default function Noticias() {
  const [noticias, setNoticias] = useState(null);
  const [screenLoading , setScreenLoading] = useState(true);

  // Buscando noticias na montagem do componente
  useEffect(() => {
    setScreenLoading(true);
    fetchNoticias()
      .then(data => {
        setNoticias(data);
        setScreenLoading(false); 
      })
      .catch(error => console.error(error));
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
            {/* Renderiza as noticias se não estiver carregando, caso contrário, renderiza o componente de carregamento */}
            {!screenLoading && noticias?.length > 0 ? (
              noticias.map((noticia, i) => (
                <CardMaker key={i} id={noticia.id} title={noticia.titulo} postDate={noticia.data} image={noticia.imagem}/>
              ))
            ) : (
              <div className={styles.semNoticias}>
                <h1>Não há noticias por enquanto! Volte mais tarde!</h1>
                <a className={styles.goBackButton} href="/">Voltar para Home</a>
              </div>
            )}
            {screenLoading && <div className={styles.load}><Load size={100}/></div>}
          </div>
        </main>
    </SitePage>
  )
}
