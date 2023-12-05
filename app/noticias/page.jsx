import SitePage from "../components/page_type/site"

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
      <h1>{titleTrimmer(title, 80)}</h1>
    </div>
  )
}

export default function Noticias() {
  return (
    <SitePage>
        <main className={styles.background}>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div className={styles.mainContainer}>
          {[...Array(9)].map(() => (
            <CardMaker title='Cara! É literalmente impossível um miojo ficar pronto em 10 minutos. IMPOSSÍVEL!' postDate='26/10/2003' image={{src: pipoca}} />
          ))}
            
          </div>
        </main>
    </SitePage>
  )
}