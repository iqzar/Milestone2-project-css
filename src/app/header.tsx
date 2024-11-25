'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

// Import CSS module
import styles from './styles/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>
        iqra khizar <span className={styles.divider}>|</span> front-end developer
      </p>

      {/* Full Navigation for Large Screens */}
      <nav className={`${styles.nav} ${styles.largeScreen}`}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/About" className={styles.navLink}>
          About
        </Link>
        <Link href="/Contact" className={styles.navLink}>
          Contact
        </Link>
      </nav>

      {/* Hamburger Menu for Small Screens */}
      <div className={styles.menuContainer}>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button className={styles.menuToggle} onClick={() => setMenuOpen(true)}>
              ☰
            </button>
          </SheetTrigger>
          <SheetContent side="right" className={styles.sheetContent}>
            <nav className={`${styles.nav} ${styles.smallScreen}`}>
              <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
                Home
              </Link>
              <Link href="/About" className={styles.navLink} onClick={handleLinkClick}>
                About
              </Link>
              <Link href="/Contact" className={styles.navLink} onClick={handleLinkClick}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
