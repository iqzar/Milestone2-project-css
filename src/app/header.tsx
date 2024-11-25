'use client'

import styles from './styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from "react";
import { X } from 'lucide-react';

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return(
        <main className={styles.container0}>
             <div className={styles.header}>
            <p className={styles.text1}>
              iqra khizar <span>|</span> front-end developer
            </p>

            {/* Menu Toggle Button */}
            <button className={styles.menuToggle} onClick={toggleMenu}>
              {menuOpen ? <X size={12} /> : "☰"}
            </button>

            {/* Navigation Links */}
            <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
              <div><Link className={styles.text1} href={'/'}>home </Link></div>
              <div><Link className={styles.text1} href={'/About'}>about </Link></div>
              <div><Link className={styles.text1} href={'/Contact'}>contact</Link></div>
            </div>
          </div>

        </main>
    )
}