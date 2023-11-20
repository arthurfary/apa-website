import SitePage from "../components/page_type/site"
import styles from "./contato.module.css"

import Image from "next/image"

export default function Contato() {
  return (
    <SitePage >
      <div className={styles.background}></div>
      <div style={{minHeight: '1200px'}}>
      </div>

    </SitePage>
  );
}
