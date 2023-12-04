import styles from "./ptoColeta.module.css"
import imgPin from "@/public/location-pin.png"

import Image from "next/image"

export default function PtoColeta() {
    return(
        <div className={styles.coletaPtsContainer}>
            <Image src={imgPin} className={styles.pinImage} alt="Pin de localizção"/>
            <div className={styles.txt1}>Ponto de coleta X</div>
            <div className={styles.txt2}>R.de exemplo, 000 - xxxxx,</div>
            <div className={styles.txt2}>São Bento do Sul - SC,</div>
            <div className={styles.txt2}>00000-000,</div>

        </div>
    )
}