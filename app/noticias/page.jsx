import SitePage from "../components/page_type/site"

// images
import bgTitleImage from "@/public/bg_noticias.png"
import bgCalendar from "@/public/calendar.png"

// pipoca temporaria
import pipoca from "@/public/pipoca.jpeg"

import styles from "./noticia.module.css"

import Image from "next/image"


const CardMaker = ({title, postDate, image}) => {
  const titleTrimmer = (titleBef, trim) => (titleBef.length > trim ? titleBef.slice(0, trim-3) + '...' : titleBef)

  return(
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImageContainer}>
          <Image src={image.src} className={styles.cardImage} alt="card image"/>
        </div>
      </div>
      <p>Postado em: {postDate}</p>
      <h2>{titleTrimmer(title, 80)}</h2>
    </div>
  )
}

export default function Noticias() {
  return (
    <SitePage>
        <main className={styles.background}>
          <div className={styles.titleContainer}>
            
            <Image src={bgTitleImage} className={styles.titleImage} />
            <Image src={bgCalendar} className={styles.titleCalendar} />
            <h1>Notícias</h1>

            
          </div>

          <div className={styles.mainContainer}>
          {[...Array(9)].map(() => (
            <CardMaker title='Campanha de adoção dia 26/10/2003 (pipoca nao inclusa)' postDate='26/10/2003' image={{src: pipoca}} />
          ))}
            
          </div>
        </main>
    </SitePage>
  )
}