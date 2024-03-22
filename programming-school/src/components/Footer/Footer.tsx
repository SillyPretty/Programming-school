import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>
            8-999-999-99-99
            <br />
            programmingschool@gmail.com
          </p>
          <div className={styles.icons}>
            <a href='#'>
              <img src='/icon-telegram.svg' alt='icon-telegram' />
            </a>
            <a href='#'>
              <img src='/icon-watsap.svg' alt='icon-watsap' />
            </a>
            <a href='#'>
              <img src='/icon-vk.svg' alt='icon-vk' />
            </a>
            <a href='https://github.com/SillyPretty' target='_blank'>
              <img src='/icon-git.svg' alt='icon-git' />
            </a>
          </div>
        </div>
        <img src='/link-dpk.svg' alt='link-dpk' />
        <p className={styles.miranda}>
          <a href='https://policies.google.com/terms?hl=ru' target='_blank'>
            Правила & Условия
          </a>
          <a href='https://policies.google.com/privacy?hl=ru' target='_blank'>
            Политика конфиденциальности
          </a>
          <a
            href='https://vscode.dev/github/SillyPretty/Programming-school'
            target='_blank'
          >
            Исходный код
          </a>
        </p>
      </div>
      <p className={styles.rule}>© 2024 Все права защищены.</p>
    </footer>
  )
}
