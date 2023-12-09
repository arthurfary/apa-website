"use client"
import styles from './page.module.css'

import BackgroundImage from '../public/foto_fundo_home.png'
import CatImage from '../public/gato_home.png'
import DogImage from '../public/cachorro_home.png'
import CircleDogImage from '../public/cachorro_ciruclo.png'
import LinesImage from '../public/lines_home.png'
import BallAndBoneImage from '@/public/ball_and_bone_home.png'
import PawsImage from '@/public/patas_home.png'
import CurvyRectangle from '@/public/curvy_rectangle_home.png'
import boneImage from '@/public/osso.png'
import MobileCurvyImage from '@/public/mobile_curvy_image.png'

import FotoHome1 from '@/public/foto_home_1.png'
import FotoHome2 from '@/public/foto_home_2.png'
import FotoHome3 from '@/public/foto_home_3.png'
import FotoHome4 from '@/public/foto_home_4.png'

// pipoca temporaria
import pipoca from '@/public/pipoca.jpeg'

import SitePage from './components/page_type/site'


import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
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
      <main className={styles.main}>
        
        
          <div className={styles.heroContainer}>
            <Image src={BackgroundImage} layout='fill' objectPosition='center' className={styles.BackgroundImage} alt="imgBg2"/> 
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

          <div className={styles.pawsContainer}>
            <Image src={PawsImage} className={styles.pawsImage}></Image>
          </div>
        

        

        {/* Imagens entre o hero e o container */}
        <div className={styles.linesContainer}>
          <Image src={LinesImage} className={styles.linesImage}></Image>
        </div>

        <div className={styles.ballAndBoneContainer}>
          <Image src={BallAndBoneImage} className={styles.ballAndBoneImage}></Image>
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


        {/* Imagens entre o hero e o container */}
        <div className={styles.linesContainer2}>
          <Image src={LinesImage} className={styles.linesImage2}></Image>
        </div>

        <div className={styles.pawsContainer2}>
            <Image src={PawsImage} className={styles.pawsImage2}></Image>
        </div>

        
        <div className={styles.curvyRectangle}>
          <Image src={windowWidth > 700 ? CurvyRectangle : MobileCurvyImage} objectPosition='center' className={styles.CurvyRectangleBg} alt="imgBg2"/> 

          <div className={styles.rectContainer}>
            {[FotoHome1, FotoHome2, FotoHome3, FotoHome4].map((foto, i) => (
              <div key={i} className={styles.rectDiv}>
                <Image src={foto} alt={`Image ${i+1}`} className={styles.rectImage} />
              </div>
            ))}
          </div>
          
          <a className={styles.boneButtonContainer} href='/adocao'>
            <div className={styles.boneButton} style={{ position: 'relative', width: '100%', height: '100%' }}>
              
              <Image src={boneImage} layout='fill' objectFit={'contain'} objectPosition='center' style={{cursor: 'pointer'}}></Image>
              <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>Adote um Pet!</h1>
            </div>
          </a>

        </div>
        
        
      </main>
    </SitePage>
  )
}