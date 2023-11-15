import styles from './header.module.css'

import Link from 'next/link'

export default function Header() {
    return (
    <header className={styles.header}>
      <h1>Apa</h1>
      <nav className={styles.nav}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/historia">História</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/doacao">Doação</Link></li>
            <li><Link href="/adocao">Adoção</Link></li>
            <li><Link href="/atividades">Atividades</Link></li>
            <li><Link href="/noticias">Notícias</Link></li>
        </ul>
      </nav>
    </header>
    )
}