"use client"

// Importando módulos e componentes necessários
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SitePage from "@/app/components/page_type/site"
import Load from '@/app/components/load/load';
import { fetchNoticiasPorID } from '@/app/functions/fetchNoticiaPorID';

// Importando estilos e imagens
import styles from './noticia.module.css'
import bgTitleImage from '@/public/noticia_title.png'

const NewsPage = () => {
  const searchParams = useSearchParams()
  const [screenLoading , setScreenLoading] = useState(true);
  const [noticia, setNoticia] = useState(null);

  // Buscando noticia na montagem do componente
  useEffect(() => {
    setScreenLoading(true);
    fetchNoticiasPorID(searchParams.get('id'))
      .then(data => {
        setNoticia(data);
        setScreenLoading(false); // Define o carregamento como falso após buscar os dados
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <SitePage>
        {/* Renderiza a noticia se não estiver carregando, caso contrário, renderiza o componente de carregamento */}
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
                line ? <p key={index}>{line}</p> : <p key={index}><br/></p>
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
