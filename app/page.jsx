import styles from './page.module.css'

import FotoFundo from '../public/foto_fundo_home.jpeg'

import SitePage from './components/page_type/site'
import HeroImage from './components/hero_maker/ImageHero'

export default function Home() {
  return (
    <SitePage>
      <main className={styles.main}>
        <HeroImage src={FotoFundo} height={100} opacity={.1}>
          <div className={styles.herodiv}>
            <h1>Bem vindo a APA!</h1>
          </div>
        </HeroImage>
        <h2>test</h2>
      </main>
    </SitePage>
  )
}
