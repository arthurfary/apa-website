import styles from './page.module.css'

import SitePage from './components/page_type/site'

export default function Home() {
  return (
    <SitePage>
      <main className={styles.main}>
        <h1>HomePage</h1>
      </main>
    </SitePage>
  )
}
