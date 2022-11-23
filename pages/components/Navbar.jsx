import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div>
            <Image 
                src="/images/pokeball.png"
                width="30"
                height="30"
                alt="Pokeshow"
            />
            <h1>Pokeshow</h1>
        </div>
        <ul>
            <li>
                <Link href="/">
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link href="/sobre">
                    <p>Sobre</p>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar