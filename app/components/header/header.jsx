"use client"
import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>Apa</h1>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>


      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
            <ActiveLink href="/"><li>Home</li></ActiveLink>
            <ActiveLink href="/historia"><li>História</li></ActiveLink>
            <ActiveLink href="/como_ajudar"><li>Como Ajudar</li></ActiveLink>
            <ActiveLink href="/adocao"><li>Adoção</li></ActiveLink>
            <ActiveLink href="/noticias"><li>Notícias</li></ActiveLink>
        </ul>
      </nav>
    </header>
  )
}
