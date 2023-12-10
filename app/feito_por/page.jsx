
import SitePage from "../components/page_type/site"

import styles from './feitopor.module.css'

import ajudantes from './feitopor.json'

const CardMaker = ({nome, desc, linkedin = null, github = null}) => {
    return(
        <div className={styles.card}>
            <h1>{nome}</h1>
            <h2>{desc}</h2>

            <div className={styles.cardButtonContainer}>
                {linkedin && <a className={styles.cardLinkedin} href={linkedin} target="_blank">Linkedin</a>}
                {github && <a className={styles.cardGithub} href={github} target="_blank">Github</a>}
            </div>
        </div>
    )
}



export default function FeitoPor(){
    const firstLetterUpper = (word) => word.charAt(0).toUpperCase() + word.slice(1);
    
    

    return(
        <SitePage>
            <div className={styles.mainContainer}>

                <div className={styles.titleContainer}>
                    <h1>Este projeto foi realizado em parceria com
                        a matéria Engenharia de Software II
                        do curso Sistemas de Informação
                        na UDESC
                    </h1>
                </div>

                {Object.keys(ajudantes).map((key) => 
                    <div className={styles.tipoContainer}>
                        
                            <div className={styles.namesContainer} key={key}>
                                <h1 className={styles.cardTipoTexto}>{firstLetterUpper(key)}</h1>
                                {ajudantes[key].map((pessoa, key2) => {
                                    return (
                                        <CardMaker key={key2} nome={pessoa.nome} desc={pessoa.desc} linkedin={pessoa.linkedin} github={pessoa.github} />
                                    )
                                })}
                            </div>
                        
                    </div>
                )}

                

            </div>
        </SitePage>
    )
}