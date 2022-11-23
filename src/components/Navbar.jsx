import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
            <Image 
                src="/images/pokeball.png"
                width="30"
                height="30"
                alt="Pokeshow"
            />
            <h1>Pokeshow</h1>
        </Link>
        <ul className={styles.link_items}>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/sobre">
                    Sobre
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar