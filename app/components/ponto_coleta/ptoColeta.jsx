import styles from "./ptoColeta.module.css"
import imgPin from "@/public/location-pin.png"

import Image from "next/image"

export default function PtoColeta({nome, rua, numero, cidade, estado, cep}) {
    return(
        <div className={styles.coletaPtsContainer}>
            <Image src={imgPin} className={styles.pinImage} alt="Pin de localizção"/>
            <div className={styles.txt1}>{nome}</div>
            <div className={styles.txt2}>{rua}, {numero}</div>
            <div className={styles.txt2}>{cidade} - {estado}</div>
            <div className={styles.txt2}>{cep}</div>

        </div>
    )
}