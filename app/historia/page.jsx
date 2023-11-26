import SitePage from "../components/page_type/site"
import styles from "./historia.module.css"
import imgBack_01 from '../../public/historia-bg-01.png'
import imgBack_02 from '../../public/historia-bg-02.png'
import imgDog_01 from '../../public/historia-dog-01.png'
import imgDog_02 from '../../public/historia-dog-02.png'
import imgDog_03 from '../../public/historia-dog-03.png'
import imgMisc_01 from '../../public/paws_02.png'
import imgMisc_02 from '../../public/petLove.png'

import Image from "next/image"

export default function Historia() {
    return (
      <SitePage>
        <main style={{minHeight: '600px', marginTop:'75px'}}>
          <div className={styles.justifyContainer}>

            <div className={styles.titleContainer}>
              <Image src={imgBack_01} className={styles.bgImg} style={{maxWidth:'95%', height:'auto'}}/>
              <div className={styles.historyTitle} >Nossa História</div>
            </div>

            <div className={styles.historyContainer}>
              <Image src={imgDog_02} className={styles.dogImageLeft}/>
              <div className={styles.historyText}>
              A APA surgiu do <strong>amor e preocupação</strong> de seus fundadores pelos animais, isso levou a criação da associação visando <strong>ajudar a comunidade</strong> de São Bento do Sul/SC.
              </div>
              <Image src={imgMisc_01} className={styles.fgImgSmall} style={{right:'5%', bottom:'-5%', transform:'scaleX(-1)'}}/>
            </div>
              
            <div className={styles.invHistoryContainer} style={{backgroundColor: 'var(--footer-color)'}}>
              <div className={styles.historyText}>
              As ações desenvolvidas pela APA visam <strong>educar e conscientizar</strong> a população, mostrando que um animal de estimação não é um brinquedo, e que, como qualquer ser vivo, merece <strong>respeito e dignidade.</strong>
              </div>
              <Image src={imgDog_03} className={styles.dogImageRight} style={{width:'35vw', maxWidth:'260px', marginRight:'5vw'}}/>
            </div>

            <div className={styles.historyContainer} style={{display:'block'}}>
              <Image src={imgMisc_01} className={styles.fgImgSmall} style={{left:'5%', top:'-20%'}}/>
              <div className={styles.historyText} style={{textAlign:'center'}}>
                A APA também realiza <strong>resgates de animais</strong> em situações de risco, oferecendo tratamento veterinário e abrigo temporário até que sejam adotados por uma família amorosa.
              </div>
              <div className={styles.historyText} style={{textAlign:'center'}}>
                A entidade também promove campanhas de <strong>adoção responsável</strong>, buscando encontrar lares adequados e cuidadosos para os animais resgatados. 
              </div>
              <Image src={imgMisc_02} className={styles.fgImgSmall} style={{left:'5%', bottom:'-5%', width:'auto'}}/>
            </div>
            
            <div className={styles.historyContainer} style={{maxWidth:'100%'}}>
              <Image src={imgBack_02} className={styles.bgImg}/>
              <div className={styles.historyText} style={{maxWidth:'560px'}}>
                A APA é uma organização <strong>sem fins lucrativos</strong> e conta com a ajuda de voluntários e doações para continuar realizando seu importante trabalho em prol dos animais.
              </div>
              <Image src={imgDog_01} className={styles.dogImageRight}/>
            </div>

          </div>
        </main>
      </SitePage>
    )
  }
  