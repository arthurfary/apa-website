import styles from "./footer.module.css"
import imgFaceLogo from "../../../public/facebook-logo.svg"
import imgInstLogo from "../../../public/instagram-logo.svg"
import imgFooterCap from "../../../public/footer-cap.svg"
import imgLocationPin from "../../../public/location-pin.png"
import imgPawIcon from "../../../public/paw-icon.svg"
import imgPaws from "../../../public/paws.png"
import imgPetToys from "../../../public/pet_toys.png"
import imgApaLogo from "../../../public/apa-logo-placeholder.JPG"

import Image from "next/image"

export default function Footer() {
return(
    <footer className={styles.footer}>
    <cap><Image src={imgFooterCap} alt="footerCap" className={styles.capImage}/></cap>
    <div className={styles.footerContainer}>
      <div className={styles.enderecoContainer}> 
        <Image src={imgLocationPin} alt="locatinoPin" className={styles.centeredImage} style={{maxWidth: '64px'}}/>
        <h2 style={{textAlign:'center', color: "black"}}>
          Nosso Endereço
        </h2>
        <p style={{textAlign:'center', textWrap:'pretty', color: "black", padding: '5px'}}>
          R. Darci Roesler, 152 - Oxford, São Bento do Sul - SC, 89285-696
        </p>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsWrap}>
            <a href="https://www.facebook.com/ApasbsProtetoraDosAnimais" className={styles.button} target="_blank">
              <Image src={imgFaceLogo} alt="facebookBtn" className={styles.image} />
            </a>
            <a href="https://www.instagram.com/apa.sbs" className={styles.button} target="_blank">
              <Image src={imgInstLogo} alt="InstagramBtn" className={styles.image} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contatoCollumn}> 
        <h2 style={{textAlign:'center', color: "black"}}>
          Entre em contato conosco
        </h2>
        <u1>
            <li><input type="text" id="nome" name="nome" placeholder="Nome"/></li>

            <li><input type="email" id="email" name="email" placeholder="seu@email.com" color="black"/></li>

            <li><textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem aqui..."></textarea></li>

              <button className={styles.button} style={{minHeight:'30px', minWidth:'60px', float:'right'}}>
                <h2>Enviar</h2>
                <Image src={imgPawIcon} alt='Icone Botão' className={styles.BtnImage}/>
              </button>
        </u1>
      </div>
      <Image src={imgApaLogo} alt="apaLogo" style={{maxWidth:'25%', height:'fit-content', alignSelf:'center', marginBottom:'3em'}}/>
    </div>
  <Image src={imgPaws} className={styles.miscImage} style={{left:'15px', bottom:'15px'}}/>
  <Image src={imgPetToys} className={styles.miscImage} style={{right:'15px', bottom:'15px'}}/>
  </footer>
)

}