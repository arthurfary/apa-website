import styles from "./footer.module.css"
import imgFaceLogo from "../../../public/facebook-logo.svg"
import imgInstLogo from "../../../public/instagram-logo.svg"
import imgFooterCap from "../../../public/footer-cap.svg"
import imgPawIcon from "../../../public/paw-icon.svg"
import imgPaws from "../../../public/paws.png"
import imgPetToys from "../../../public/pet_toys.png"
import imgApaLogo from "../../../public/apa-logo.png"

import Image from "next/image"

export default function Footer() {
return(
    <footer className={styles.footer}>
      <cap><Image src={imgFooterCap} alt="footerCap" className={styles.capImage}/></cap>
      <div className={styles.footerContainer}>
        <div className={styles.addressContainer}> 
          <Image src={imgApaLogo} alt="apaLogo" className={styles.apaLogo}/>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsWrap}>
              <a href="https://www.facebook.com/ApasbsProtetoraDosAnimais" className={styles.button} target="_blank">
                <Image src={imgFaceLogo} alt="facebookBtn" className={styles.btnImage} />
              </a>
              <a href="https://www.instagram.com/apa.sbs" className={styles.button} target="_blank">
                <Image src={imgInstLogo} alt="InstagramBtn" className={styles.btnImage} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerItem}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/historia">História</a>
            </li>
            <li>
              <a href="/doacao">Doação</a>
            </li>
            <li>
              <a href="/adocao">Adoção</a>
            </li>
            <li>
              <a href="/atividades">Atividades</a>
            </li>
            <li>
              <a href="/noticias">Noticias</a>
            </li>
            <li>
              <a href="/sistema">Área Restrita</a>
            </li>
          </ul>
        </div>
      </div>
    <Image src={imgPaws} alt="imgPaws" className={styles.miscImage} style={{right:'15px', top:'15px'}}/>
    <Image src={imgPetToys} alt="imgPetToys" className={styles.miscImage} style={{right:'15px', bottom:'15px'}}/>
  </footer>
)

}