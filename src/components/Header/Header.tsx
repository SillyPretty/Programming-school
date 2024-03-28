import { useState } from 'react'
import styles from './Header.module.scss'

export default function Header({ setOrder }: any) {
  const [burger, setBurger] = useState<boolean>(false)

  return (
    <header>
      {burger && (
        <div className={styles.menu_burger}>
          <div className={styles.menu_logo}>
            <a href='#'>
              <img src='/logo.png' className={styles.logo} alt='logo' />
            </a>
            <button
              className={styles.menu_close}
              type='button'
              onClick={() => setBurger(false)}
            >
              x
            </button>
          </div>
          <nav className={styles.menu_navigation}>
            <ul>
              <li>
                <a href='https://github.com/SillyPretty' target='_blank'>
                  О нас
                </a>
              </li>
              <li>
                <a href='#'>О профессии</a>
              </li>
              <li>
                <a href='#'>Процесс обучения</a>
              </li>
              <li>
                <a href='#'>Курсы</a>
              </li>
              <li>
                <button
                  className={styles.menu_order}
                  type='button'
                  onClick={() => setOrder(true)}
                >
                  Связь с нами
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className={styles.container}>
        <a href='#'>
          <img src='/logo.png' className={styles.logo} alt='logo' />
        </a>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href='https://github.com/SillyPretty' target='_blank'>
                О нас
              </a>
            </li>
            <li>
              <a href='#'>О профессии</a>
            </li>
            <li>
              <a href='#'>Процесс обучения</a>
            </li>
            <li>
              <a href='#'>Курсы</a>
            </li>
          </ul>
        </nav>
        <button
          className={styles.burger}
          type='button'
          onClick={() => setBurger(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <button
          className={styles.order}
          type='button'
          onClick={() => setOrder(true)}
        >
          Связь с нами
        </button>
      </div>
    </header>
  )
}
