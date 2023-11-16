"use client"
import styles from './header.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ActiveLink = ({ children, href }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={isActive ? styles.active : ""}>
      {children}
    </Link>
  )
}

export default function Header() {
    return (
    <header className={styles.header}>
      <h1>Apa</h1>
      <nav className={styles.nav}>
        <ul>
            <li><ActiveLink href="/">Home</ActiveLink></li>
            <li><ActiveLink href="/historia">História</ActiveLink></li>
            <li><ActiveLink href="/contato">Contato</ActiveLink></li>
            <li><ActiveLink href="/doacao">Doação</ActiveLink></li>
            <li><ActiveLink href="/adocao">Adoção</ActiveLink></li>
            <li><ActiveLink href="/atividades">Atividades</ActiveLink></li>
            <li><ActiveLink href="/noticias">Notícias</ActiveLink></li>
        </ul>
      </nav>
    </header>
    )
}
