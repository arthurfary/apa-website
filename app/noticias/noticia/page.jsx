"use client"
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';

import styles from './noticia.module.css'
import Image from 'next/image';

import bgTitleImage from '@/public/noticia_title.png'
import SitePage from "@/app/components/page_type/site"

import Load from '@/app/components/load/load';

const NewsPage = () => {
  const searchParams = useSearchParams()
  const [screenLoading , setScreenLoading] = useState(true);

  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    setScreenLoading(true);
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
      setNoticia(data.rows.find(row => row.id === searchParams.get('id')));
    })
    .catch(error => console.error(error))
    .then(setScreenLoading(false)); // Log any errors
  }, []);
  

  return (

    <SitePage>
        
        {!screenLoading &&
         <>
            <div className={styles.titleContainer}>
              <div className={styles.titleImageContainer} >
                <Image src={bgTitleImage} className={styles.titleImage} />
                <h1>{noticia?.titulo}</h1>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <img src={noticia?.imagem}/>
            </div>

            <div className={styles.contentContainer} >
              {noticia?.conteudo.split('\n').map((line, index) => (
                line ? <p key={index}>{line}</p> : <p key={index}>&nbsp;</p>
              ))}

              <p className={styles.data}>
                <i>Publicado em: {new Date(noticia?.data).toLocaleDateString('pt-BR')}</i>
              </p>

            </div>
          </>
        }
        {screenLoading && <div className={styles.load}><Load size={100}/></div>}
      
    </SitePage>
  );
};

export default NewsPage;