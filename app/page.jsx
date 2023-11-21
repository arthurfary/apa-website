import styles from './page.module.css'

import BackgroundImage from '../public/foto_fundo_home.png'
import CatImage from '../public/gato_home.png'
import DogImage from '../public/cachorro_home.png'
import CircleDogImage from '../public/cachorro_ciruclo.png'
import LinesImage from '../public/lines_home.png'
import BallAndBoneImage from '@/public/ball_and_bone_home.png'
import PawsImage from '@/public/patas_home.png'

import SitePage from './components/page_type/site'
import ImageHero from './components/hero_maker/ImageHero'
import ColorHero from './components/hero_maker/ColorHero'

import Image from 'next/image';

export default function Home() {
  return (
    <SitePage>
      <main className={styles.main}>
        <ImageHero src={BackgroundImage} height={115} pullUp={5}>
          <div className={styles.heroContainer}>
            <div className={styles.imageContainer}>
              <div className={styles.singleImageContainer}>
                <Image className={styles.responsiveImage} src={CatImage}></Image>
              </div>
              <div className={styles.singleImageContainer}>
                <Image className={styles.responsiveImage} src={DogImage}></Image>
              </div>
            </div>

            <div className={styles.textBox}>
              <h1>APA</h1>
              <p>Associação Protetora dos Animais</p>
            </div>
          </div>
        </ImageHero>

        {/* Imagens entre o hero e o container */}
        <div className={styles.linesContainer}>
          <Image src={LinesImage} className={styles.linesImage}></Image>
        </div>

        <div className={styles.ballAndBoneContainer}>
          <Image src={BallAndBoneImage} className={styles.ballAndBoneImage}></Image>
        </div>

        <div className={styles.pawsContainer}>
          <Image src={PawsImage} className={styles.pawsImage}></Image>
        </div>

        <div className={styles.helpContainer}>
          

          <div className={styles.helpText}> 
            <h1>Como ajudar</h1>
            <p>Você pode nos ajudar com doações, sendo um voluntário ou adotando um pet!</p>
          </div>

          <div className={styles.dogCircle}>
            <Image className={styles.circleDogImage} src={CircleDogImage}></Image>
          </div>

        </div>

        <ColorHero color={'var(--primary-color)'} height={100}>
          <h1>teste</h1>
        </ColorHero>

        <h2>test</h2>
      </main>
    </SitePage>
  )
}
